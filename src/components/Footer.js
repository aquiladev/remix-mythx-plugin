import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';

import packageJson from './../../package.json';

function Footer({ isPlugin, openSettings }) {
  return (
    <div className={`position-absolute text-center w-100 pb-1${isPlugin ? '' : ' text-white'}`} style={{ fontSize: 12, bottom: 0 }}>
      {isPlugin &&
        <FontAwesomeIcon
          icon={faCog}
          size='lg'
          className='float-left ml-2'
          style={{ cursor: 'pointer' }}
          onClick={openSettings} />}
      <a href={`https://github.com/aquiladev/remix-mythx-plugin/releases/tag/${packageJson.version}`} target='_block' rel='noopener noreferrer'>
        {packageJson.version}
      </a> | <a href='https://discord.gg/VhdtjCh' target='_blank' rel='noopener noreferrer'>Get support</a>
    </div>
  );
}

Footer.propTypes = {
  isPlugin: PropTypes.bool,
  openSettings: PropTypes.func
};

export default Footer;