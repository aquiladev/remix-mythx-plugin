import React from 'react';
import PropTypes from 'prop-types';
import armlet from 'armlet';

import { formatIssues } from './lib/report';

const storageKey = 'remix-mythx-plugin';
const TRIAL_CREDS = {
  address: '0x0000000000000000000000000000000000000000',
  pwd: 'trial'
};

class Plugin extends React.Component {
  constructor(props) {
    super(props);

    const raw = localStorage.getItem(storageKey) || '{}';
    const settings = JSON.parse(raw);

    this.state = {
      address: settings.address || TRIAL_CREDS.address,
      pwd: settings.pwd || TRIAL_CREDS.pwd,
      compilation: {},
      selected: '',
      isAnalyzig: false,
      analysis: {},
      report: {},
      error: ''
    };

    this.saveCredentials = this.saveCredentials.bind(this);
    this.analyze = this.analyze.bind(this);
    this.getContractList = this.getContractList.bind(this);

    this.props.client.on('solidity', 'compilationFinished', (target, source, version, data) => {
      const list = Object.keys(data.contracts[target]);
      this.setState({
        compilation: {
          target,
          source,
          version,
          data
        },
        selected: list[0]
      });
    });
  }

  saveCredentials() {
    const { address, pwd } = this.state;
    localStorage.setItem(storageKey, JSON.stringify({ address, pwd }));
  }

  async analyze() {
    const { address, pwd, compilation } = this.state;

    const mythXClient = new armlet.Client(
      {
        ethAddress: address,
        password: pwd,
      });

    this.setState({
      analysis: {},
      error: '',
      isAnalyzig: true
    });
    await this.props.client.editor.discardHighlight();
    mythXClient.analyzeWithStatus(
      {
        "data": this.getRequestData(),
        "clientToolName": "remythx"
      })
      .then(result => {
        this.setState({
          analysis: result,
          error: '',
          isAnalyzig: false
        });

        const { issues } = result;
        this.handleResult(compilation.source, issues);
      }).catch(err => {
        this.setState({
          error: err.message || err,
          analysis: {},
          isAnalyzig: false
        });
      });
    // const result = require('./examples/reportWithIssues.json');
    // this.handleResult(compilation.source, result);
  }

  getRequestData() {
    const { compilation, selected } = this.state;
    const { data = {}, source = {} } = compilation;
    const { contracts = [] } = data;

    var bytecode = contracts[compilation.target][selected].evm.bytecode;
    var deployedBytecode = contracts[compilation.target][selected].evm.deployedBytecode;
    const request = {
      contractName: selected,
      bytecode: bytecode.object,
      sourceMap: bytecode.sourceMap,
      deployedBytecode: deployedBytecode.object,
      deployedSourceMap: deployedBytecode.sourceMap,
      analysisMode: "quick",
      mainSource: compilation.target,
      sourceList: Object.keys(source.sources),
      sources: {}
    };

    for (let key in source.sources) {
      if (source.sources.hasOwnProperty(key)) {
        request.sources[key] = { source: source.sources[key].content };
      }
    }

    return request;
  }

  handleResult(data, result) {
    const { compilation } = this.state;
    const uniqueIssues = formatIssues(data, result);

    if (uniqueIssues.length === 0) {
      this.setState({
        report: {
          message: `✔ No errors/warnings found in ${compilation.target}`
        }
      });
    } else {
      this.setState({
        report: {
          list: uniqueIssues
        }
      });
    }
  }

  getContractList() {
    const { compilation } = this.state;
    const { data = {} } = compilation;
    const { contracts = [] } = data;
    var file = contracts[compilation.target] || {};
    return Object.keys(file).map(x => {
      return {
        name: x,
        path: `${compilation.target}::${x}`
      }
    });
  }

  async highlightIssue(issue, message) {
    const position = {
      start: { line: message.line, column: message.column },
      end: { line: message.endLine, column: message.endCol }
    }
    const color = message.severity === 1 ? '#ffd300' : '#ff0000';
    await this.props.client.editor.highlight(position, issue.filePath, color);
  }

  render() {
    const { compilation, selected, isAnalyzig, error, report } = this.state;

    return (
      <div className="container">
        <div className="row border-bottom pb-3">
          <div className="col-md-6 offset-md-3">
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
                  defaultValue={this.state.address} />
              </div>
              <div className="form-group">
                <label htmlFor="pwd">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="pwd"
                  placeholder="Password"
                  onChange={(e) => this.setState({ pwd: e.target.value })}
                  defaultValue={this.state.pwd} />
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
        <div className="row mt-3">
          <div className="col-md-6 offset-md-3">
            {
              compilation.target ?
                <form>
                  <div className="form-group">
                    <select
                      className="form-control"
                      defaultValue={selected}
                      onChange={(e) => this.setState({ selected: e.target.value })}>
                      {this.getContractList().map((x, i) =>
                        <option
                          key={i}
                          value={x.name}>
                          {x.path}
                        </option>
                      )}
                    </select>
                  </div>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={this.analyze}
                    disabled={isAnalyzig}>
                    {
                      isAnalyzig ?
                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> :
                        <span>Analyze</span>
                    }
                  </button>
                </form> :
                <div className="alert alert-warning w-100" role="alert">
                  You need to compile your contract first!
                </div>
            }
          </div>
        </div>
        {
          error ?
            <div className="row mt-3">
              <div className="col-md-6 offset-md-3">
                <div className="alert alert-danger w-100" role="alert">
                  {error}
                </div>
              </div>
            </div> : null
        }
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
                        <div>{x.filePath}</div>
                        {
                          x.messages.map((m, j) => {
                            return (
                              <div key={j} className="pl-3">
                                <button type="button"
                                  className="btn btn-link p-0 pr-1"
                                  onClick={() => { this.highlightIssue(x, m); }}>
                                  {`[${m.line + 1}:${m.column}]`}
                                </button>
                                <span title={`${m.description}`} style={{ cursor: 'help' }}>{`${m.message}`}</span>
                                {
                                  m.ruleId ?
                                    <a href={m.ruleLink} className="pl-1">[{m.ruleId}]</a> :
                                    null
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
      </div>
    );
  }
}

Plugin.propTypes = {
  client: PropTypes.object.isRequired,
};

export default Plugin;
