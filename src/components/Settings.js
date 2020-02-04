import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Alert, TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap'
import classnames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

function Settings ({
  address: inAddress,
  pwd: inPwd,
  env: inEnv,
  token: inToken,
  save: saveSettings,
  close
}) {
  const [state, setState] = useState({
    activeTab: '2',
    address: inAddress,
    pwd: inPwd,
    token: inToken,
    env: inEnv
  })

  const toggle = tab => {
    if (state.activeTab !== tab) setState({ ...state, activeTab: tab })
  }

  const save = () => {
    const { address, pwd, token, env } = state
    saveSettings(address, pwd, token, env)
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12 text-right'>
          <FontAwesomeIcon
            icon={faTimes}
            size='lg'
            className='float-right ml-2'
            style={{ cursor: 'pointer' }}
            onClick={close}
          />
        </div>
      </div>
      <div className='row pb-3'>
        <div className='col-md-6 offset-md-3'>
          <div className='text-left'>
            <h5>Access</h5>
            {state.address === '0x0000000000000000000000000000000000000000' && !state.token &&
              <Alert color='warning' style={{ fontSize: 13, padding: '.5rem' }}>
                You need to sign in to use MythX APIs.
                Trial user will be soon deprecated.
                Please register an account on <a href='https://mythx.io/' target='_blank' rel='noopener noreferrer' className='text-nowrap'>www.mythx.io</a>
              </Alert>
            }
          </div>
          <Nav tabs style={{ marginTop: '.5rem' }}>
            <NavItem>
              <NavLink
                className={classnames({ active: state.activeTab === '2' })}
                style={{ padding: '.5rem 1rem', cursor: 'pointer' }}
                onClick={() => { toggle('2') }}
              >
                Access Token
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: state.activeTab === '1' })}
                style={{ padding: '.5rem 1rem', cursor: 'pointer' }}
                onClick={() => { toggle('1') }}
              >
                Credentials
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={state.activeTab}
            style={{ padding: '.5rem .5rem 0 .5rem', border: '1px solid #ecf0f1', borderTop: 'none' }}>
            <TabPane tabId='2'>
              <div className='form-group'>
                <label htmlFor='token'>JWT</label>
                <input
                  type='text'
                  className='form-control'
                  id='token'
                  placeholder='Token'
                  onChange={(e) => setState({ ...state, token: e.target.value })}
                  defaultValue={state.token} />
              </div>
            </TabPane>
            <TabPane tabId='1'>
              <div className='form-group'>
                <label htmlFor='address'>Address/Email</label>
                <input
                  type='text'
                  className='form-control'
                  id='address'
                  placeholder='Address'
                  onChange={(e) => setState({ ...state, address: e.target.value })}
                  defaultValue={state.address} />
              </div>
              <div className='form-group'>
                <label htmlFor='pwd'>Password</label>
                <input
                  type='password'
                  className='form-control'
                  id='pwd'
                  placeholder='Password'
                  onChange={(e) => setState({ ...state, pwd: e.target.value })}
                  defaultValue={state.pwd} />
              </div>
            </TabPane>
          </TabContent>
        </div>
      </div>
      <div className='row pb-3'>
        <div className='col-md-6 offset-md-3'>
          <div className='text-left'>
            <h5>Environment</h5>
          </div>
          <div>
            <div className='form-group'>
              <label htmlFor='address'>Endpoint</label>
              <input
                type='text'
                className='form-control'
                id='endpoint'
                placeholder='Endpoint'
                onChange={(e) => setState({ ...state, env: e.target.value })}
                defaultValue={state.env} />
            </div>
            <button
              type='button'
              className='btn btn-primary'
              onClick={save}>
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

Settings.propTypes = {
  save: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired
}

export default Settings
