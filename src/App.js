import React from 'react';
import { createIframeClient } from '@remixproject/plugin';
import { Client } from 'mythxjs';
import keccak from 'keccakjs';

import 'bootstrap/dist/css/bootstrap.css';

import Plugin from './components/Plugin';
import Footer from './components/Footer';
import Notifier from './components/Notifier';
import Home from './components/Home';
import { formatIssues } from './lib/report';

const separator = '::';
const storageKey = 'remix-mythx-plugin';
const TRIAL_CREDS = {
  address: '0x0000000000000000000000000000000000000000',
  pwd: 'trial'
};
const token_invalid_msg = 'Access token has expired or is invalid! Please login again.';

let client = {};

class App extends React.Component {
  constructor(props) {
    super(props);

    const raw = localStorage.getItem(storageKey) || '{}';
    const settings = JSON.parse(raw);
    const address = settings.address || TRIAL_CREDS.address;

    this.state = {
      pluginOpen: false,
      address,
      pwd: settings.pwd || TRIAL_CREDS.pwd,
      jwt: null,
      compilations: {},
      selected: '',
      contractList: [],
      mapping: {},
      isAnalyzig: false,
      analyses: {},
      reports: {},
      alerts: []
    };

    client = createIframeClient();
    client.onload(() => {
      this.setState({ pluginOpen: true });

      client.call('solidity', 'getCompilationResult')
        .then((result) => {
          if (!result) {
            return;
          }

          const { data, source } = result;

          if (!source) {
            return;
          }

          this.processCompilation(source.target, source, data);
        });

      client.on('solidity', 'compilationFinished', (target, source, _, data) => {
        this.processCompilation(target, source, data);
      });
    })

    this.processCompilation = this.processCompilation.bind(this);
    this.login = this.login.bind(this);
    this.saveCredentials = this.saveCredentials.bind(this);
    this.analyze = this.analyze.bind(this);
    this.getRequestData = this.getRequestData.bind(this);
    this.handleResult = this.handleResult.bind(this);
    this.highlightIssue = this.highlightIssue.bind(this);
    this.clear = this.clear.bind(this);
    this.selectContract = this.selectContract.bind(this);
    this.addAlert = this.addAlert.bind(this);
    this.dismissAlert = this.dismissAlert.bind(this);
  }

  processCompilation(target, source, data) {
    const { compilations, contractList, mapping } = this.state;

    const { contracts = [] } = data;
    const file = contracts[target];
    const fileMapping = {};

    Object.keys(file).forEach(x => {
      const bytecode = file[x].evm.deployedBytecode.object;
      const hash = new keccak(256);
      hash.update(Buffer.from(bytecode, 'hex'));

      fileMapping[target] = target;
      fileMapping[`0x${hash.digest('hex')}`] = target;
    })

    const list = Object.keys(data.contracts[target]);
    const contractSet = new Set([...contractList, ...this.getContracts(data, target)]);
    this.setState({
      compilations: { ...compilations, [target]: { source, data } },
      selected: `${target}${separator}${list[0]}`,
      contractList: Array.from(contractSet),
      mapping: { ...mapping, ...fileMapping }
    });
  }

  getContracts(data, target) {
    const { contracts = [] } = data;
    var file = contracts[target] || {};
    return Object.keys(file).map(x => `${target}${separator}${x}`);
  }

  saveCredentials(address, pwd) {
    this.setState({ address, pwd });
    localStorage.setItem(storageKey, JSON.stringify({ address, pwd }));
    this.addAlert('success', 'Saved');
  }

  analyze = async () => {
    const { address, pwd, compilations, selected, analyses, reports } = this.state;
    const [target] = selected.split(separator);

    const mythx = new Client(address, pwd, 'remythx');
    const jwt = await this.login(mythx);

    this.setState({
      analyses: { ...analyses, [selected]: null },
      isAnalyzig: true,
      jwt
    });
    await client.call('editor', 'discardHighlight');

    try {
      const options = this.getRequestData();
      const analysis = await mythx.analyze(options);
      const issues = await mythx.getDetectedIssues(analysis.uuid);

      this.setState({
        analyses: { ...analyses, [selected]: issues },
        isAnalyzig: false
      });

      this.handleResult(compilations[target].source, issues);
    } catch (err) {
      this.setState({
        analyses: { ...analyses, [selected]: null },
        reports: {
          ...reports,
          [selected]: {
            list: [{
              messages: [{
                error: err.message || err
              }]
            }]
          }
        },
        isAnalyzig: false
      });
    }
  }

  login(client) {
    let jwt = this.state.jwt;

    if (jwt) {
      try {
        client.loginWithToken(jwt);
        return jwt;
      } catch (err) {
        if (err.message !== token_invalid_msg) {
          throw err;
        }
      }
    }

    return client.login();
  }

  getRequestData() {
    const { compilations, selected } = this.state;
    const [target, contract] = selected.split(separator);
    const { data = {}, source = {} } = compilations[target];
    const { contracts = [], sources = {} } = data;

    const file = contracts[target];
    const bytecode = file[contract].evm.bytecode;
    const deployedBytecode = file[contract].evm.deployedBytecode;
    const request = {
      contractName: contract,
      bytecode: bytecode.object,
      sourceMap: bytecode.sourceMap,
      deployedBytecode: deployedBytecode.object,
      deployedSourceMap: deployedBytecode.sourceMap,
      analysisMode: 'quick',
      mainSource: target,
      sourceList: Object.keys(source.sources),
      sources: {}
    };

    // eslint-disable-next-line no-unused-vars
    for (let key in source.sources) {
      if (source.sources.hasOwnProperty(key)) {
        const ast = sources[key].ast;
        const src = source.sources[key].content;

        request.sources[key] = { ast, source: src };
      }
    }

    return request;
  }

  handleResult(data, result) {
    const { selected, reports, mapping } = this.state;
    const uniqueIssues = formatIssues(data, mapping, result);

    if (uniqueIssues.length === 0) {
      this.setState({
        reports: {
          ...reports,
          [selected]: {
            message: `✔ No errors/warnings found in ${selected}`
          }
        }
      });
    } else {
      this.setState({
        reports: {
          ...reports,
          [selected]: {
            list: uniqueIssues
          }
        }
      });
    }
  }

  highlightIssue = async (issue, message) => {
    if (message.line < 0) {
      return;
    }

    const position = {
      start: { line: message.line, column: message.column },
      end: { line: message.endLine, column: message.endCol }
    }
    const color = message.severity === 1 ? '#ffd300' : '#ff0000';
    await client.call('editor', 'highlight', position, issue.filePath, color);
  }

  clear() {
    this.setState({
      compilations: {},
      selected: '',
      contractList: [],
      mapping: {},
      analyses: {},
      reports: {}
    });
  }

  selectContract(contract) {
    this.setState({ selected: contract });
  }

  addAlert(type, text) {
    this.setState({
      alerts: [...this.state.alerts, {
        id: (new Date()).getTime(),
        type: type,
        message: text
      }]
    });
  }

  dismissAlert(alert) {
    const { alerts } = this.state;
    const idx = alerts.indexOf(alert);

    if (idx >= 0) {
      this.setState({
        alerts: [...alerts.slice(0, idx), ...alerts.slice(idx + 1)]
      });
    }
  }

  render() {
    const { pluginOpen, alerts } = this.state;

    const content = pluginOpen ?
      <div style={{ position: 'relative', minHeight: '100vh' }}>
        <main>
          <Plugin {...this.state}
            saveCredentials={this.saveCredentials}
            selectContract={this.selectContract}
            analyze={this.analyze}
            addAlert={this.addAlert}
            highlightIssue={this.highlightIssue}
            clear={this.clear} />
        </main>
        <Footer isPlugin />
        <Notifier alerts={alerts} onDismiss={this.dismissAlert} />
      </div> :
      <Home />;

    return (
      <>
        {content}
      </>
    );
  }
}

export default App;
