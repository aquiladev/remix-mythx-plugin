import React from 'react'
import PropTypes from 'prop-types'

import Issue from './Issue'

function Report ({ report, highlightIssue }) {
  return (
    <>
      {
        report.message &&
        <div className='row'>
          <div className='col-md-6 offset-md-3'>
            <div className='alert alert-success w-100' role='alert'>
              {report.message}
            </div>
          </div>
        </div>
      }
      {
        report.list &&
        <div className='row'>
          <div className='col-md-6 offset-md-3'>
            {
              report.list.map((x, i) => {
                const issueCount = x.errorCount + x.warningCount
                const summary = (amount, caption) => {
                  return `${amount} ${amount === 1 ? caption : `${caption}s`}`
                }
                return (
                  <div key={i} className='border-bottom pt-2 pb-2'>
                    <div className='text-truncate font-weight-bold'>{x.filePath}</div>
                    {
                      x.messages.map((m, j) => <Issue key={j} issue={m} highlightIssue={(issue) => highlightIssue(x, issue)} />)
                    }
                    {
                      !!issueCount &&
                      <div>
                        {`✖ ${summary(issueCount, 'issue')} (${summary(x.errorCount, 'error')}, ${summary(x.warningCount, 'warning')})`}
                      </div>
                    }
                  </div>
                )
              })
            }
          </div>
        </div>
      }
    </>
  )
}

Report.propTypes = {
  report: PropTypes.object.isRequired,
  highlightIssue: PropTypes.func.isRequired
}

export default Report
