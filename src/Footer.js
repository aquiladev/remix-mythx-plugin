import React from 'react';
import PropTypes from 'prop-types';

import packageJson from './../package.json';

function Footer({ isPlugin }) {
  return (
    <div className={`position-absolute text-center w-100 pb-1${isPlugin ? '' : ' text-white'}`} style={{ fontSize: 12, bottom: 0 }}>
      <a href={`https://github.com/aquiladev/remix-mythx-plugin/releases/tag/v${packageJson.version}`} target='_block' rel="noopener noreferrer">
        v{packageJson.version}
      </a> | <a href="https://github.com/aquiladev/remix-mythx-plugin" target="_blank" rel="noopener noreferrer">
        GitHub
      </a> | <a href="https://discord.gg/VhdtjCh" target="_blank" rel="noopener noreferrer">Get support</a>
    </div>
  );
}

Footer.propTypes = {
  isPlugin: PropTypes.bool.isRequired
};

export default Footer;