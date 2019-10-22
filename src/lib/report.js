import SourceMappingDecoder from 'remix-lib/src/sourceMappingDecoder';

import { isFatal, getUniqueIssues } from './eslint';

const mythx2Severity = {
  High: 2,
  Medium: 1,
};

const decoder = new SourceMappingDecoder();

/**
 * Turn a srcmap entry (the thing between semicolons) into a line and
 * column location.
 * We make use of this.sourceMappingDecoder of this class to make
 * the conversion.
 *
 * @param {string} srcEntry - a single entry of solc sourceMap
 * @param {Array} lineBreakPositions - array returned by the function 'mapLineBreakPositions'
 * @returns {line: number, column: number}
 */
const textSrcEntry2lineColumn = (srcEntry, lineBreakPositions) => {
  const ary = srcEntry.split(':');
  const sourceLocation = {
    length: parseInt(ary[1], 10),
    start: parseInt(ary[0], 10),
  };
  const loc = decoder.convertOffsetToLineColumn(sourceLocation, lineBreakPositions);
  return [loc.start, loc.end];
};

/**
 * Convert a MythX issue into an ESLint-style issue.
 * The eslint report format which we use, has these fields:
 *
 * - column,
 * - endCol,
 * - endLine,
 * - fatal,
 * - line,
 * - message,
 * - description,
 * - ruleId,
 * - ruleLink,
 * - severity
 *
 * but a MythX JSON report has these fields:
 *
 * - description.head
 * - description.tail
 * - locations
 * - severity
 * - swcId
 * - swcTitle
 *
 * @param {object} issue - the MythX issue we want to convert
 * @param {string} source - holds the contract code
 * @returns eslint-issue object
 */
const issue2EsLint = (issue, source, locations) => {
  let swcLink;

  if (!issue.swcID) {
    swcLink = 'N/A';
  } else {
    swcLink = 'https://swcregistry.io/docs/' + issue.swcID;
  }

  const esIssue = {
    fatal: false,
    ruleId: issue.swcID,
    ruleLink: swcLink,
    message: `${issue.description.head}`,
    description: `${issue.description.tail}`,
    severity: mythx2Severity[issue.severity] || 1,
    line: -1,
    column: 0,
    endLine: -1,
    endCol: 0,
    sourceType: ''
  };

  if (source) {
    let startLineCol, endLineCol;
    const lineBreakPositions = decoder.getLinebreakPositions(source);

    if (locations.length) {
      const srcEntry = locations[0].sourceMap.split(';')[0];
      [startLineCol, endLineCol] = textSrcEntry2lineColumn(srcEntry, lineBreakPositions);
      esIssue.sourceType = locations[0].sourceType;
    }

    if (startLineCol) {
      esIssue.line = startLineCol.line;
      esIssue.column = startLineCol.column;
      esIssue.endLine = endLineCol.line;
      esIssue.endCol = endLineCol.column;
    }
  }

  return esIssue;
};

/**
 * Gets the source index from the issue sourcemap
 * 
 * @param {object[]} locations - array of text-only MythX API issue locations
 * @returns {number}
 */
const getSourceIndex = locations => {
  if (locations.length) {
    const sourceMapRegex = /(\d+):(\d+):(\d+)/g;
    const match = sourceMapRegex.exec(locations[0].sourceMap);
    // Ignore `-1` source index for compiler generated code
    return match ? match[3] : 0;
  }

  return 0;
};


/**
 * Converts MythX analyze API output item to Eslint compatible object
 * @param {object} report - issue item from the collection MythX analyze API output
 * @param {object} data - Contains array of solidity contracts source code and the input filepath of contract
 * @returns {object}
 */
const convertMythXReport2EsIssue = (report, mapping, data) => {
  const { issues } = report;
  const { sources, functionHashes } = data;
  const results = {};

  const textLocationFilterFn = location => (
    (location.sourceType === 'solidity-file')
    &&
    (location.sourceFormat === 'text')
  );

  // eslint-disable-next-line array-callback-return
  issues.map(issue => {
    const locations = issue.locations.filter(textLocationFilterFn);
    const location = locations.length ? locations[0] : undefined;

    let sourceCode = '';
    let filePath = '<unknown>';

    if (location) {
      const sourceList = location.sourceList || report.sourceList || [];
      const sourceIndex = getSourceIndex(location);
      const fileName = sourceList[sourceIndex];

      if (fileName) {
        filePath = mapping[fileName] || fileName;

        if (sources[filePath]) {
          sourceCode = sources[filePath].content;
        }
      }
    }

    if (!results[filePath]) {
      results[filePath] = {
        errorCount: 0,
        warningCount: 0,
        fixableErrorCount: 0,
        fixableWarningCount: 0,
        filePath,
        functionHashes,
        sourceCode,
        messages: [],
      };
    }

    let message = issue2EsLint(issue, (sources[filePath] || {}).content, locations);
    results[filePath].messages.push(message);
  });

  // eslint-disable-next-line no-unused-vars
  for (let k in results) {
    if (results.hasOwnProperty(k)) {
      results[k].warningCount = results[k].messages.reduce((acc, { fatal, severity }) =>
        !isFatal(fatal, severity) ? acc + 1 : acc, 0);

      results[k].errorCount = results[k].messages.reduce((acc, { fatal, severity }) =>
        isFatal(fatal, severity) ? acc + 1 : acc, 0);
    }
  }

  return Object.values(results);
};

export const formatIssues = (data, mapping, issues) => {
  const results = {};
  issues.forEach(report => {
    convertMythXReport2EsIssue(report, mapping, data)
      .forEach(issue => {
        const result = results[issue.filePath];
        if (!result) {
          results[issue.filePath] = issue;
          return;
        }

        results[issue.filePath] = {
          errorCount: result.errorCount + issue.errorCount,
          warningCount: result.warningCount + issue.warningCount,
          fixableErrorCount: result.fixableErrorCount + issue.fixableErrorCount,
          fixableWarningCount: result.fixableWarningCount + issue.fixableWarningCount,
          filePath: result.filePath,
          messages: [...result.messages, ...issue.messages],
        };
      });
  });

  const eslintIssues = Object.values(results)
    .reduce((acc, curr) => acc.concat(curr), []);
  return getUniqueIssues(eslintIssues);
};