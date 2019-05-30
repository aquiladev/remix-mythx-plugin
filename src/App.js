import React from 'react';
import { createIframeClient, remixApi } from 'remix-plugin';

import 'bootstrap/dist/css/bootstrap.css';

import Plugin from './Plugin';
import remixLogo from './images/remix.svg';
import mythxLogo from './images/mythx.png';
import plus from './images/plus.svg';

let client = {};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      plugin: false
    };

    const devMode = { port: 8080 }
    client = createIframeClient({ customApi: remixApi, devMode });
    client.onload(() => {
      this.setState({ plugin: true });
    })
  }

  render() {
    const { plugin } = this.state;

    return (
      <>
        {
          plugin ?
            <Plugin client={client} /> :
            <div className="h-100"
              style={{ background: '#012A3E' }}>
              <div className="d-flex align-items-end flex-column" style={{ height: '50%' }}>
                <div className="mt-auto pb-5 w-100">
                  <h1 className="display-1 text-white"
                    style={{ textAlign: 'center' }}>re:MythX</h1>
                </div>
              </div>
              <div className="text-center pt-4">
                <a href="https://remix.ethereum.org" target="_blank" rel="noopener noreferrer">
                  <img src={remixLogo} alt="remix" style={{ height: 120, width: 120, verticalAlign: 'top' }} />
                </a>
                <img src={plus} alt="plus" className="pl-5 pr-5" style={{ height: 100, width: 140 }} />
                <a href="https://mythx.io/" target="_blank" rel="noopener noreferrer">
                  <img src={mythxLogo} alt="mythx" style={{ height: 130, width: 180, verticalAlign: 'top' }} />
                </a>
              </div>
            </div>
        }
        <div className={`fixed-bottom text-center pb-1${plugin ? null : ' text-white'}`} style={{ fontSize: 12 }}>
          © Sergii Bomko, 2019 | <a href="https://github.com/aquiladev/remix-mythx-plugin">GitHub</a>
        </div>
      </>
    );
  }
}

export default App;
