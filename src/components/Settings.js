import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import InfoIcon from './InfoIcon';

function Settings({
  address: inAddress,
  pwd: inPwd,
  env: inEnv,
  save: saveSettings,
  close }) {

  const [address, setAddress] = useState(inAddress);
  const [pwd, setPwd] = useState(inPwd);
  const [env, setEnv] = useState(inEnv);

  const save = () => {
    saveSettings(address, pwd, env);
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
            <h5>
              Credentials
              <InfoIcon id='cred_info' placement='right'>
                <div>In order to use MythX</div>
                <div>APIs you need to have</div>
                <div>credentials. You can use</div>
                <div>the trial credential, but</div>
                <div>analysis's result will be</div>
                <div>limited. In order to get</div>
                <div>credential you need to</div>
                <div><a href='https://mythx.io/' target='_blank' rel='noopener noreferrer' className='text-nowrap'>sign up</a></div>
              </InfoIcon>
            </h5>
          </div>
          <div>
            <div className='form-group'>
              <label htmlFor='address'>Address</label>
              <input
                type='text'
                className='form-control'
                id='address'
                placeholder='Address'
                onChange={(e) => setAddress(e.target.value)}
                defaultValue={address} />
            </div>
            <div className='form-group'>
              <label htmlFor='pwd'>Password</label>
              <input
                type='password'
                className='form-control'
                id='pwd'
                placeholder='Password'
                onChange={(e) => setPwd(e.target.value)}
                defaultValue={pwd} />
            </div>
          </div>
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
                id='address'
                placeholder='Endpoint'
                onChange={(e) => setEnv(e.target.value)}
                defaultValue={env} />
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
};

export default Settings;