import React from 'react';
import PropTypes from 'prop-types';

import ExternalLink from './ExternalLink';
import packageJson from './../../package.json';

function Footer({ isPlugin }) {
  return (
    <div className={`position-absolute text-center w-100 pb-1${isPlugin ? '' : ' text-white'}`} style={{ fontSize: 12, bottom: 0 }}>
      <ExternalLink id='version' href={`https://github.com/aquiladev/remix-mythx-plugin/releases/tag/${packageJson.version}`} target='_block' rel='noopener noreferrer'>
        {packageJson.version}
      </ExternalLink> | <ExternalLink id='support' href='https://discord.gg/VhdtjCh' target='_blank' rel='noopener noreferrer'>Get support</ExternalLink>
    </div>
  );
}

Footer.propTypes = {
  isPlugin: PropTypes.bool
};

export default Footer;