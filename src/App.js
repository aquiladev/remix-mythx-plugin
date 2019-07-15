import React from 'react';
import { createIframeClient } from '@remixproject/plugin';

import 'bootstrap/dist/css/bootstrap.css';

import Plugin from './components/Plugin';
import Footer from './components/Footer';
import Notifier from './components/Notifier';
import Home from './components/Home';

let client = {};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      plugin: false,
      alerts: []
    };

    client = createIframeClient();
    client.onload(() => {
      this.setState({ plugin: true });
    })

    this.addAlert = this.addAlert.bind(this);
    this.onAlertDismissed = this.onAlertDismissed.bind(this);
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

  onAlertDismissed(alert) {
    const { alerts } = this.state;
    const idx = alerts.indexOf(alert);

    if (idx >= 0) {
      this.setState({
        alerts: [...alerts.slice(0, idx), ...alerts.slice(idx + 1)]
      });
    }
  }

  render() {
    const { plugin, alerts } = this.state;

    return (
      <>
        {
          plugin ?
            <div style={{ position: 'relative', minHeight: '100vh' }}>
              <main>
                <Plugin client={client} addAlert={this.addAlert} />
              </main>
              <Footer isPlugin />
              <Notifier alerts={alerts} onDismissed={this.onAlertDismissed} />
            </div> :
            <Home />
        }
      </>
    );
  }
}

export default App;
