import React from 'react';
import { createIframeClient, remixApi } from 'remix-plugin';
import armlet from 'armlet';

import 'bootstrap/dist/css/bootstrap.css';

const storageKey = 'remix-mythx-plugin';
const TRIAL_CREDS = {
  address: '0x0000000000000000000000000000000000000000',
  pwd: 'trial'
};

class App extends React.Component {
  constructor(props) {
    super(props);

    const raw = localStorage.getItem(storageKey) || '{}';
    const settings = JSON.parse(raw);

    this.state = {
      address: settings.address || TRIAL_CREDS.address,
      pwd: settings.pwd || TRIAL_CREDS.pwd,
      compilation: {},
      selected: '',
      analysis: {},
      error: '',
      isAnalyzig: false
    };

    this.saveCredentials = this.saveCredentials.bind(this);
    this.analyze = this.analyze.bind(this);
    this.getContractList = this.getContractList.bind(this);

    const devMode = { port: 8000 }
    const client = createIframeClient({ customApi: remixApi, devMode });
    client.on('solidity', 'compilationFinished', (target, source, version, data) => {
      const list = Object.keys(data.contracts[target])
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

  analyze() {
    const { address, pwd, compilation, selected } = this.state;
    const { data = {} } = compilation;
    const { contracts = [] } = data;

    const client = new armlet.Client(
      {
        ethAddress: address,
        password: pwd,
      });

    var bytecode = contracts[compilation.target][selected].evm.bytecode;
    const request = {
      "contractName": selected,
      "bytecode": bytecode.object,
      "sourceMap": bytecode.sourceMap,
      "analysisMode": "quick"
    };

    this.setState({
      analysis: {},
      error: '',
      isAnalyzig: true
    });
    client.analyzeWithStatus(
      {
        "data": request,
        "clientToolName": "remythx"
      })
      .then(result => {
        this.setState({
          analysis: result,
          error: '',
          isAnalyzig: false
        });
        console.log("RESULT", result);
      }).catch(err => {
        this.setState({
          error: err,
          analysis: {},
          isAnalyzig: false
        });
        console.log("ERROR", err);
      })
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

  render() {
    const { compilation, selected, isAnalyzig, error } = this.state;

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
      </div>
    );
  }
}

export default App;
