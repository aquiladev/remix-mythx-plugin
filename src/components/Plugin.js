import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleRight,
  faAngleDown,
  faClipboard,
  faTrash
} from '@fortawesome/free-solid-svg-icons';
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import Report from './Report';
import Log from './Log';
import InfoIcon from './InfoIcon';

const separator = '::';

class Plugin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      address: props.address,
      pwd: props.pwd,
      creadOpen: props.address === '0x0000000000000000000000000000000000000000'
    };

    this.saveCredentials = this.saveCredentials.bind(this);
  }

  saveCredentials() {
    const { address, pwd } = this.state;
    this.props.saveCredentials(address, pwd);
  }

  render() {
    const { address, pwd, creadOpen } = this.state;
    const {
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
      changeTab
    } = this.props;
    const [target] = selected.split(separator);

    return (
      <div className="container">
        <div className="row border-bottom pb-3">
          <div className="col-md-6 offset-md-3">
            <div className="btn btn-light btn-block text-left rounded-0 border-0"
              style={{ cursor: "pointer" }}
              onClick={() => { this.setState({ creadOpen: !creadOpen }) }}>
              Credentials
              <div style={{ position: 'absolute', right: 24, top: 4 }}>
                {creadOpen ? <span style={{ fontSize: 14, lineHeight: '16px', paddingRight: 6 }}>hide</span> : null}
                <FontAwesomeIcon icon={creadOpen ? faAngleDown : faAngleRight} className='pt-1' />
              </div>
              <InfoIcon id='cred_info' placement='right'>
                <div>In order to use MythX</div>
                <div>APIs you need to have</div>
                <div>credentials. You can use</div>
                <div>the trial credential, but</div>
                <div>analysis's result will be</div>
                <div>limited. In order to get</div>
                <div>credential you need to</div>
                <div><a href="https://mythx.io/" target="_blank" rel="noopener noreferrer" className="text-nowrap">sign up</a></div>
              </InfoIcon>
            </div>
            <div className={creadOpen ? null : "collapse"}>
              <form>
                <div className="form-group">
                  <label htmlFor="address">Address</label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    aria-describedby="emailHelp"
                    placeholder="Address"
                    onChange={(e) => this.setState({ address: e.target.value })}
                    defaultValue={address} />
                </div>
                <div className="form-group">
                  <label htmlFor="pwd">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="pwd"
                    placeholder="Password"
                    onChange={(e) => this.setState({ pwd: e.target.value })}
                    defaultValue={pwd} />
                </div>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={this.saveCredentials}>
                  Save
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-6 offset-md-3">
            {
              target ?
                <>
                  <div className="d-flex pb-3">
                    <div className="w-100">
                      <select
                        className="form-control"
                        value={selected}
                        onChange={(e) => selectContract(e.target.value)}
                        disabled={isAnalyzig}
                      >
                        {contractList.map((x, i) =>
                          <option key={i} value={x}>{x}</option>
                        )}
                      </select>
                    </div>
                    <div className="flex-shrink-1">
                      <button
                        type="button"
                        className="form-control btn ml-2"
                        title="Clear"
                        onClick={clear}
                        disabled={isAnalyzig}>
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </div>
                  </div>
                  <div>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => analyze()}
                      disabled={isAnalyzig}>
                      {
                        isAnalyzig ?
                          <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> :
                          <div>
                            Analyze
                            <InfoIcon id='analysis_info' placement='right'>
                              <div>Analysis can take couple</div>
                              <div>of minutes</div>
                            </InfoIcon>
                          </div>
                      }
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary ml-2"
                      onClick={() => analyze('full')}
                      disabled={isAnalyzig}>
                      Run full mode
                    </button>
                    {
                      isAnalyzig &&
                      <div style={{ fontSize: 14, fontWeight: 'bold' }}>
                        We are analyzing your contract. This should take up to 2 minutes
                      </div>
                    }
                  </div>
                </> :
                <div className="alert alert-warning w-100" role="alert">
                  You need to compile your contract first!
                </div>
            }
          </div>
        </div>
        <Nav tabs className="pt-1">
          <NavItem>
            <NavLink
              href="#"
              className={pluginActiveTab === 'log' ? 'active' : null}
              onClick={() => changeTab('log')}
            >
              Log
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              href="#"
              className={pluginActiveTab === 'report' ? 'active' : null}
              onClick={() => changeTab('report')}
            >
              Report
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={pluginActiveTab}>
          <TabPane tabId='log'>
            <Log list={this.props.log} />
          </TabPane>
          <TabPane tabId='report'>
            {
              analyses[selected] &&
              <div className="text-right">
                <CopyToClipboard
                  text={JSON.stringify(analyses[selected])}
                  onCopy={() => addAlert('success', 'Copied')}>
                  <button type="button" className="btn" title="Copy raw report to clipboard">
                    <FontAwesomeIcon className="ml-2" icon={faClipboard} /><span className="pl-1">Raw report</span>
                  </button>
                </CopyToClipboard>
              </div>
            }
            <Report report={reports[selected] || {}} highlightIssue={highlightIssue} />
          </TabPane>
        </TabContent>
      </div>
    );
  }
}

Plugin.propTypes = {
  addAlert: PropTypes.func.isRequired,
  contractList: PropTypes.array.isRequired,
  selected: PropTypes.string.isRequired,
  isAnalyzig: PropTypes.bool.isRequired,
  analyses: PropTypes.object.isRequired,
  reports: PropTypes.object.isRequired,
  saveCredentials: PropTypes.func.isRequired,
  selectContract: PropTypes.func.isRequired,
  highlightIssue: PropTypes.func.isRequired,
  clear: PropTypes.func.isRequired,
  changeTab: PropTypes.func.isRequired,
};

export default Plugin;
