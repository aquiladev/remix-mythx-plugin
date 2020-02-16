import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboard, faTrash } from '@fortawesome/free-solid-svg-icons'
import {
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  ButtonGroup,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Alert
} from 'reactstrap'
import { CopyToClipboard } from 'react-copy-to-clipboard'

import Report from './Report'
import Log from './Log'
import InfoIcon from './InfoIcon'

const separator = '::'

function Plugin ({
  compilations,
  contractList,
  selected,
  isAnalyzing,
  analyses,
  reports,
  selectContract,
  pluginActiveTab,
  analyze,
  addAlert,
  highlightIssue,
  clear,
  changeTab,
  log
}) {
  const [isAnalyzeDropdownOpen, setIsAnalyzeDropdownOpen] = useState(false)
  const [target] = selected.split(separator)

  const isAnalyzeAllowed = (() => {
    const [, contract] = selected.split(separator)

    if (!compilations[target]) {
      return false
    }

    const { data = {} } = compilations[target]
    const { contracts = [] } = data

    const file = contracts[target]
    const { bytecode } = file[contract].evm

    return bytecode && bytecode.object && bytecode.object.length
  })()

  const isAnalyzeDisabled = isAnalyzing || !isAnalyzeAllowed

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 offset-md-3'>
          {
            target
              ? <>
                <div className='d-flex pb-3'>
                  <div className='w-100'>
                    <select
                      className='form-control'
                      value={selected}
                      onChange={(e) => selectContract(e.target.value)}
                      disabled={isAnalyzing}
                    >
                      {contractList.map((x, i) =>
                        <option key={i} value={x}>{x}</option>
                      )}
                    </select>
                  </div>
                  <div className='flex-shrink-1'>
                    <button
                      type='button'
                      className='form-control btn ml-2'
                      title='Clear'
                      onClick={clear}
                      disabled={isAnalyzing}>
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </div>
                </div>
                {
                  !isAnalyzeAllowed &&
                  <Alert color='warning' style={{ padding: '.5rem 2.9rem .5rem .5rem' }}>
                    This contract is abstract, it is not possible to analyze.
                  </Alert>
                }
                <div>
                  <ButtonGroup>
                    <ButtonDropdown
                      isOpen={isAnalyzeDropdownOpen}
                      toggle={() => setIsAnalyzeDropdownOpen(!isAnalyzeDropdownOpen)}>
                      <button
                        type='button'
                        className='btn btn-primary'
                        onClick={() => analyze()}
                        disabled={isAnalyzeDisabled}>
                        {
                          isAnalyzing
                            ? <span className='spinner-border spinner-border-sm' role='status' aria-hidden='true'></span>
                            : <div>Analyze</div>
                        }
                      </button>
                      <DropdownToggle caret disabled={isAnalyzeDisabled} className='btn-primary' />
                      <DropdownMenu>
                        <DropdownItem onClick={() => analyze()} disabled={isAnalyzeDisabled}>Analyze</DropdownItem>
                        <DropdownItem onClick={() => analyze('standard')} disabled={isAnalyzeDisabled}>Analyze (Standard)</DropdownItem>
                        <DropdownItem onClick={() => analyze('deep')} disabled={isAnalyzeDisabled}>Analyze (Deep)</DropdownItem>
                      </DropdownMenu>
                    </ButtonDropdown>
                  </ButtonGroup>
                  <InfoIcon id='analysis_info' placement='bottom'>
                    <div>Analysis can take couple</div>
                    <div>of minutes. <b>Standard</b> mode</div>
                    <div>takes approx 25 minutes.</div>
                    <div><b>Deep</b> takes approx 70 minutes.</div>
                  </InfoIcon>
                  {
                    isAnalyzing &&
                    <div style={{ fontSize: 14, fontWeight: 'bold' }}>
                      We are analyzing your contract. This should take up to 2 minutes
                    </div>
                  }
                </div>
              </>
              : <div className='alert alert-warning w-100' role='alert' style={{ padding: '.5rem' }}>
                You need to compile your contract first!
              </div>
          }
        </div>
      </div>
      <Nav tabs className='pt-1'>
        <NavItem>
          <NavLink
            href='#'
            className={pluginActiveTab === 'log' ? 'active' : null}
            onClick={() => changeTab('log')}
          >
            Log
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            href='#'
            className={pluginActiveTab === 'report' ? 'active' : null}
            onClick={() => changeTab('report')}
          >
            Report
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={pluginActiveTab}>
        <TabPane tabId='log'>
          <Log list={log} />
        </TabPane>
        <TabPane tabId='report'>
          {
            analyses[selected] &&
            <div className='text-right'>
              <CopyToClipboard
                text={JSON.stringify(analyses[selected])}
                onCopy={() => addAlert('success', 'Copied')}>
                <button type='button' className='btn' title='Copy raw report to clipboard'>
                  <FontAwesomeIcon className='ml-2' icon={faClipboard} /><span className='pl-1'>Raw report</span>
                </button>
              </CopyToClipboard>
            </div>
          }
          <Report report={reports[selected] || {}} highlightIssue={highlightIssue} />
        </TabPane>
      </TabContent>
    </div>
  )
}

Plugin.propTypes = {
  addAlert: PropTypes.func.isRequired,
  contractList: PropTypes.array.isRequired,
  selected: PropTypes.string.isRequired,
  isAnalyzing: PropTypes.bool.isRequired,
  analyses: PropTypes.object.isRequired,
  reports: PropTypes.object.isRequired,
  selectContract: PropTypes.func.isRequired,
  highlightIssue: PropTypes.func.isRequired,
  clear: PropTypes.func.isRequired,
  changeTab: PropTypes.func.isRequired
}

export default Plugin
