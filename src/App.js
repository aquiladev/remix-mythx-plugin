import React from 'react';
import { createIframeClient } from '@remixproject/plugin';

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

    client = createIframeClient();
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
