import React from 'react';
import PropTypes from 'prop-types';

import { isFatal } from './../lib/eslint';

function Report({ report, highlightIssue }) {
  return (
    <>
      {
        report.message &&
        <div className="row mt-3">
          <div className="col-md-6 offset-md-3">
            <div className="alert alert-success w-100" role="alert">
              {report.message}
            </div>
          </div>
        </div>
      }
      {
        report.list &&
        <div className="row mt-3">
          <div className="col-md-6 offset-md-3">
            {
              report.list.map((x, i) => {
                const issueCount = x.errorCount + x.warningCount;
                const summary = (amount, caption) => {
                  return `${amount} ${amount === 1 ? caption : `${caption}s`}`;
                };
                return (
                  <div key={i} className="border-bottom pt-2 pb-2">
                    <div className="text-truncate font-weight-bold">{x.filePath}</div>
                    {
                      x.messages.map((m, j) => {
                        return (
                          <div key={j} className="pl-3">
                            {
                              m.error ?
                                <div className="alert alert-danger p-1">
                                  {m.error}
                                </div> :
                                <>
                                  <button type="button"
                                    className={`btn ${isFatal(m.fatal, m.severity) ? "btn-danger" : "btn-warning"} text-left p-1 mb-1 w-100`}
                                    onClick={() => { highlightIssue(x, m); }}>
                                    <span className="pr-2">{`[${m.line + 1}:${m.column}]`}</span>
                                    <span title={`${m.description}`} style={{ cursor: 'help' }}>{`${m.message}`}</span>
                                    {m.ruleId && <a href={m.ruleLink} className="pl-1">[{m.ruleId}]</a>}
                                  </button>
                                </>
                            }
                          </div>
                        );
                      })
                    }
                    {
                      !!issueCount &&
                      <div>
                        {`✖ ${summary(issueCount, 'issue')} (${summary(x.errorCount, 'error')}, ${summary(x.warningCount, 'warning')})`}
                      </div>
                    }
                  </div>
                );
              })
            }
          </div>
        </div>
      }
    </>
  );
}

Report.propTypes = {
  report: PropTypes.object.isRequired,
  highlightIssue: PropTypes.func.isRequired
};

export default Report;
