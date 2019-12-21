import React from 'react'
import PropTypes from 'prop-types'

const KnownAddressMap = {
  '0xaffeaffeaffeaffeaffeaffeaffeaffeaffeaffe': 'Creator',
  '0xdeadbeefdeadbeefdeadbeefdeadbeefdeadbeef': 'Attacker'
}

function IssueSteps ({ issue }) {
  const { extra = {} } = issue
  const { testCases = [] } = extra

  if (!testCases.length) {
    return null
  }

  return (
    <div className='pt-1' style={{ fontSize: 14 }}>
      <h6 className='bg-light p-1'>Steps to reproduce</h6>
      {
        testCases.map((tc, i) => {
          return (
            <div key={i} className=''>
              {tc.steps.map((s, j) => {
                const knownAddress = KnownAddressMap[s.origin]
                return (
                  <div key={j} className='pt-2'>
                    <h6 className='font-weight-bold'>{`Transaction ${j + 1} ${j === 0 ? '(contract creation)' : ''}`}</h6>
                    <div className='pl-3 text-truncate'>
                      <div>
                        <b>Sender:</b> {s.origin} {knownAddress ? `(${knownAddress})` : ''}
                      </div>
                      <div>
                        <b>Value:</b> {s.value}
                      </div>
                      <div>
                        <b>Function name:</b> {s.name || 'N/A'}
                      </div>
                      <div>
                        <b>Calldata:</b> {s.input}
                      </div>
                      <div>
                        <b>Decoded calldata:</b> {s.decodedInput || 'N/A'}
                      </div>
                    </div>
                  </div>
                )
              })}
              <hr />
            </div>
          )
        })
      }
    </div>
  )
}

IssueSteps.propTypes = {
  issue: PropTypes.object.isRequired
}

export default IssueSteps
