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
  DropdownItem
} from 'reactstrap'
import { CopyToClipboard } from 'react-copy-to-clipboard'

import Report from './Report'
import Log from './Log'
import InfoIcon from './InfoIcon'

const separator = '::'

function Plugin ({
  contractList,
  selected,
  isAnalyzig,
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
                      disabled={isAnalyzig}
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
                      disabled={isAnalyzig}>
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </div>
                </div>
                <div>
                  <ButtonGroup>
                    <ButtonDropdown
                      isOpen={isAnalyzeDropdownOpen}
                      toggle={() => setIsAnalyzeDropdownOpen(!isAnalyzeDropdownOpen)}>
                      <button
                        type='button'
                        className='btn btn-primary'
                        onClick={() => analyze()}
                        disabled={isAnalyzig}>
                        {
                          isAnalyzig
                            ? <span className='spinner-border spinner-border-sm' role='status' aria-hidden='true'></span>
                            : <div>Analyze</div>
                        }
                      </button>
                      <DropdownToggle caret disabled={isAnalyzig} className='btn-primary' />
                      <DropdownMenu>
                        <DropdownItem onClick={() => analyze()} disabled={isAnalyzig}>Analyze</DropdownItem>
                        <DropdownItem onClick={() => analyze('full')} disabled={isAnalyzig}>Analyze (Full mode)</DropdownItem>
                        <DropdownItem onClick={() => analyze('deep')} disabled={isAnalyzig}>Analyze (Deep)</DropdownItem>
                      </DropdownMenu>
                    </ButtonDropdown>
                  </ButtonGroup>
                  <InfoIcon id='analysis_info' placement='bottom'>
                    <div>Analysis can take couple</div>
                    <div>of minutes. The <b>Full mode</b></div>
                    <div>takes approx 30 minutes.</div>
                  </InfoIcon>
                  {
                    isAnalyzig &&
                    <div style={{ fontSize: 14, fontWeight: 'bold' }}>
                      We are analyzing your contract. This should take up to 2 minutes
                    </div>
                  }
                </div>
              </>
              : <div className='alert alert-warning w-100' role='alert'>
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
  isAnalyzig: PropTypes.bool.isRequired,
  analyses: PropTypes.object.isRequired,
  reports: PropTypes.object.isRequired,
  selectContract: PropTypes.func.isRequired,
  highlightIssue: PropTypes.func.isRequired,
  clear: PropTypes.func.isRequired,
  changeTab: PropTypes.func.isRequired
}

export default Plugin
