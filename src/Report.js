import React from 'react';
import PropTypes from 'prop-types';

function Report({ report, highlightIssue }) {
  return (
    <>
      {
        report.message ?
          <div className="row mt-3">
            <div className="col-md-6 offset-md-3">
              <div className="alert alert-success w-100" role="alert">
                {report.message}
              </div>
            </div>
          </div> : null
      }
      {
        report.list ?
          <div className="row mt-3">
            <div className="col-md-6 offset-md-3">
              {
                report.list.map((x, i) => {
                  const problemCount = x.errorCount + x.warningCount;
                  const summary = (amount, caption) => {
                    return `${amount} ${amount === 1 ? caption : `${caption}s`}`;
                  };
                  return (
                    <div key={i} className="border-bottom pt-2 pb-2">
                      <div className="text-truncate">{x.filePath}</div>
                      {
                        x.messages.map((m, j) => {
                          return (
                            <div key={j} className="pl-3">
                              {
                                m.error ?
                                  <>{m.error}</> :
                                  <>
                                    <button type="button"
                                      className="btn btn-link p-0 pr-1"
                                      onClick={() => { highlightIssue(x, m); }}>
                                      {`[${m.line + 1}:${m.column}]`}
                                    </button>
                                    <span title={`${m.description}`} style={{ cursor: 'help' }}>{`${m.message}`}</span>
                                    {
                                      m.ruleId ?
                                        <a href={m.ruleLink} className="pl-1">[{m.ruleId}]</a> :
                                        null
                                    }
                                  </>
                              }
                            </div>
                          );
                        })
                      }
                      <div>
                        {`✖ ${summary(problemCount, 'problem')} (${summary(x.errorCount, 'error')}, ${summary(x.warningCount, 'warning')})`}
                      </div>
                    </div>
                  );
                })
              }
            </div>
          </div> : null
      }
    </>
  );
}

Report.propTypes = {
  report: PropTypes.object.isRequired,
  highlightIssue: PropTypes.func.isRequired
};

export default Report;
