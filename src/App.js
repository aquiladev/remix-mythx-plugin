import React from 'react';
import { createIframeClient, remixApi } from 'remix-plugin';

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
      pwd: settings.pwd || TRIAL_CREDS.pwd
    };

    const devMode = { port: 8000 }
    const client = createIframeClient({ customApi: remixApi, devMode });
    console.log(client)
  }

  render() {
    return (
      <div className="container">
        <div className="row">
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
                  defaultValue={this.state.address} />
              </div>
              <div className="form-group">
                <label htmlFor="pwd">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="pwd"
                  placeholder="Password"
                  defaultValue={this.state.pwd} />
              </div>
              <button type="button" className="btn btn-primary">Save</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
