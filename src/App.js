import React from 'react';
import { createIframeClient, remixApi } from 'remix-plugin';

import 'bootstrap/dist/css/bootstrap.css';

import Plugin from './components/Plugin';
import Footer from './components/Footer';
import Home from './components/Home';

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
            <div style={{ position: 'relative', minHeight: '100vh' }}>
              <main>
                <Plugin client={client} />
              </main>
              <Footer isPlugin />
            </div> :
            <Home />
        }
      </>
    );
  }
}

export default App;
