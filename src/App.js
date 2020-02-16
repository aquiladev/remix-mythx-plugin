import React from 'react'
import { createIframeClient } from '@remixproject/plugin'
import { Client } from 'mythxjs'
import keccak from 'keccakjs'
import { Alert } from 'reactstrap'

import 'bootstrap/dist/css/bootstrap.css'

import Plugin from './components/Plugin'
import Settings from './components/Settings'
import Footer from './components/Footer'
import Notifier from './components/Notifier'
import Home from './components/Home'
import { formatIssues } from './lib/report'
import utils from './lib/utils'

const separator = ' - '
const storageKey = 'remix-mythx-plugin'
const TOOL_NAME = 'remythx'
const DEFAULT_ENV = 'https://api.mythx.io/v1/'
const TRIAL_CREDS = {
  address: '0x0000000000000000000000000000000000000000',
  pwd: 'trial'
}

let client = {}

class App extends React.Component {
  constructor (props) {
    super(props)

    const raw = localStorage.getItem(storageKey) || '{}'
    const appState = JSON.parse(raw)

    this.state = {
      pluginOpen: false,
      settingsOpen: false,
      address: appState.address || TRIAL_CREDS.address,
      pwd: appState.pwd || TRIAL_CREDS.pwd,
      token: appState.token,
      env: appState.env || DEFAULT_ENV,
      jwt: null,
      compilations: {},
      selected: '',
      contractList: [],
      mapping: {},
      isAnalyzing: false,
      analyses: {},
      reports: {},
      alerts: [],
      log: appState.log || [],
      pluginActiveTab: 'log',
      visibleTrialWarning: true
    }

    client = createIframeClient()
    client.onload(() => {
      this.setState({ pluginOpen: true })

      client.call('solidity', 'getCompilationResult')
        .then((result) => {
          if (!result) {
            return
          }

          const { data, source } = result

          if (!source) {
            return
          }

          this.processCompilation(source.target, source, data)
        })

      client.on('solidity', 'compilationFinished', (target, source, _, data) => {
        this.processCompilation(target, source, data)
      })
    })

    this.processCompilation = this.processCompilation.bind(this)
    this.login = this.login.bind(this)
    this.saveSettings = this.saveSettings.bind(this)
    this.logAnalysis = this.logAnalysis.bind(this)
    this.analyze = this.analyze.bind(this)
    this.getRequestData = this.getRequestData.bind(this)
    this.handleResult = this.handleResult.bind(this)
    this.highlightIssue = this.highlightIssue.bind(this)
    this.clear = this.clear.bind(this)
    this.selectContract = this.selectContract.bind(this)
    this.addAlert = this.addAlert.bind(this)
    this.dismissAlert = this.dismissAlert.bind(this)
    this.openSettings = this.openSettings.bind(this)
    this.closeSettings = this.closeSettings.bind(this)
  }

  processCompilation (target, source, data) {
    const { compilations, contractList, mapping } = this.state

    const { contracts = [] } = data
    const file = contracts[target]
    const fileMapping = {}

    Object.keys(file).forEach(x => {
      const bytecode = file[x].evm.deployedBytecode.object
      // eslint-disable-next-line
      const hash = new keccak(256)
      hash.update(Buffer.from(bytecode, 'hex'))

      fileMapping[target] = target
      fileMapping[`0x${hash.digest('hex')}`] = target
    })

    const list = Object.keys(data.contracts[target])
    const contractSet = new Set([...contractList, ...this.getContracts(data, target)])
    this.setState({
      compilations: { ...compilations, [target]: { source, data } },
      selected: `${list[0]}${separator}${target}`,
      contractList: Array.from(contractSet),
      mapping: { ...mapping, ...fileMapping }
    })
  }

  getContracts (data, target) {
    const { contracts = [] } = data
    var file = contracts[target] || {}
    return Object.keys(file).map(x => `${x}${separator}${target}`)
  }

  saveSettings (address, pwd, token, env) {
    address = address || TRIAL_CREDS.address
    pwd = pwd || TRIAL_CREDS.pwd
    env = env || DEFAULT_ENV

    this.setState({ address, pwd, token, env, jwt: null })
    const raw = localStorage.getItem(storageKey) || '{}'
    const state = JSON.parse(raw)
    const newState = {
      ...state,
      ...{ address, pwd, token, env }
    }
    localStorage.setItem(storageKey, JSON.stringify(newState))
    this.addAlert('success', 'Saved')
  }

  logAnalysis (uuid, mode) {
    const raw = localStorage.getItem(storageKey) || '{}'
    const state = JSON.parse(raw)
    const newState = {
      ...state,
      ...{
        log: [
          { timestamp: new Date().getTime(), uuid, mode },
          ...(state.log || [])
        ]
      }
    }
    localStorage.setItem(storageKey, JSON.stringify(newState))
    this.setState({ log: newState.log })
  }

  analyze = async (mode = 'quick') => {
    const { compilations, selected, analyses, reports } = this.state
    const [, target] = selected.split(separator)

    try {
      const mythx = this.createClient()
      const accessToken = await this.login(mythx)

      this.setState({
        analyses: { ...analyses, [selected]: null },
        reports: {
          ...reports,
          [selected]: {
            list: [{
              messages: []
            }]
          }
        },
        isAnalyzing: true,
        jwt: accessToken
      })
      await client.call('editor', 'discardHighlight')

      const options = this.getRequestData(mode)
      const analysis = await mythx.analyze(options)
      this.logAnalysis(analysis.uuid, mode)

      if (mode === 'quick') {
        const issues = await mythx.getDetectedIssues(analysis.uuid)

        this.setState({
          analyses: { ...analyses, [selected]: issues },
          isAnalyzing: false,
          pluginActiveTab: 'report'
        })

        this.handleResult(compilations[target].source, issues)
      } else {
        this.setState({
          isAnalyzing: false,
          pluginActiveTab: 'log'
        })
      }
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
        isAnalyzing: false,
        pluginActiveTab: 'report'
      })
    }
  }

  createClient () {
    const { address, pwd, token, jwt, env } = this.state

    try {
      return new Client(address, pwd, TOOL_NAME, env, token || jwt)
    } catch (err) {
      console.error(err)
      return new Client(address, pwd, TOOL_NAME, env)
    }
  }

  async login (client) {
    if (!Client.jwtTokens.access) {
      await client.login()
    }
    return Client.jwtTokens.access
  }

  getRequestData (mode) {
    const { compilations, selected } = this.state
    const [contract, target] = selected.split(separator)
    const { data = {}, source = {} } = compilations[target]
    const { contracts = [], sources = {} } = data

    const file = contracts[target]
    const bytecode = file[contract].evm.bytecode
    const deployedBytecode = file[contract].evm.deployedBytecode
    const request = {
      contractName: contract,
      bytecode: utils.replaceLinkedLibs(bytecode.object),
      sourceMap: bytecode.sourceMap,
      deployedBytecode: utils.replaceLinkedLibs(deployedBytecode.object),
      deployedSourceMap: deployedBytecode.sourceMap,
      analysisMode: mode,
      mainSource: target,
      sourceList: Object.keys(source.sources),
      sources: {}
    }

    for (const key in source.sources) {
      if (Object.prototype.hasOwnProperty.call(source.sources, key)) {
        const ast = sources[key].ast
        const src = source.sources[key].content

        request.sources[key] = { ast, source: src }
      }
    }

    return request
  }

  handleResult (data, result) {
    const { selected, reports, mapping } = this.state
    const uniqueIssues = formatIssues(data, mapping, result)

    if (uniqueIssues.length === 0) {
      this.setState({
        reports: {
          ...reports,
          [selected]: {
            message: `✔ No errors/warnings found in ${selected}`
          }
        }
      })
    } else {
      this.setState({
        reports: {
          ...reports,
          [selected]: {
            list: uniqueIssues
          }
        }
      })
    }
  }

  highlightIssue = async (issue, message) => {
    if (message.line < 0) {
      return
    }

    const position = {
      start: { line: message.line, column: message.column },
      end: { line: message.endLine, column: message.endCol }
    }
    const color = message.severity === 1 ? '#ffd300' : '#ff0000'
    await client.call('editor', 'highlight', position, issue.filePath, color)
  }

  clear () {
    this.setState({
      compilations: {},
      selected: '',
      contractList: [],
      mapping: {},
      analyses: {},
      reports: {}
    })
  }

  selectContract (selected) {
    this.setState({ selected })
  }

  addAlert (type, text) {
    this.setState({
      alerts: [...this.state.alerts, {
        id: (new Date()).getTime(),
        type: type,
        message: text
      }]
    })
  }

  dismissAlert (alert) {
    const { alerts } = this.state
    const idx = alerts.indexOf(alert)

    if (idx >= 0) {
      this.setState({
        alerts: [...alerts.slice(0, idx), ...alerts.slice(idx + 1)]
      })
    }
  }

  openSettings () {
    this.setState({
      settingsOpen: true
    })
  }

  closeSettings () {
    this.setState({
      settingsOpen: false
    })
  }

  render () {
    const { pluginOpen, settingsOpen, address, token, visibleTrialWarning, alerts } = this.state

    const content = pluginOpen
      ? <div style={{ position: 'relative', minHeight: '100vh' }}>
        <main>
          {settingsOpen
            ? <Settings {...this.state}
              save={this.saveSettings}
              close={this.closeSettings} />
            : <>
              {address === TRIAL_CREDS.address && !token &&
                <div className='container'>
                  <Alert color='warning' isOpen={visibleTrialWarning}
                    toggle={() => { this.setState({ visibleTrialWarning: false }) }}
                    style={{ padding: '.5rem 2.9rem .5rem .5rem' }}>
                    You are now using trial credentials. Update in <button
                      className='btn btn-link p-0'
                      style={{ display: 'contents' }}
                      onClick={this.openSettings}>Settings</button>
                  </Alert>
                </div>
              }
              <Plugin {...this.state}
                selectContract={this.selectContract}
                analyze={this.analyze}
                addAlert={this.addAlert}
                highlightIssue={this.highlightIssue}
                clear={this.clear}
                changeTab={(tab) => { this.setState({ pluginActiveTab: tab }) }} />
            </>
          }
        </main>
        <Footer isPlugin openSettings={this.openSettings} />
        <Notifier alerts={alerts} onDismiss={this.dismissAlert} />
      </div>
      : <Home />

    return (
      <>
        {content}
      </>
    )
  }
}

export default App
