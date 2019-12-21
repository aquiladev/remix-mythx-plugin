import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog } from '@fortawesome/free-solid-svg-icons'

import packageJson from './../../package.json'

function Footer ({ isPlugin, openSettings }) {
  const links = (
    <>
      <a href={`https://github.com/aquiladev/remix-mythx-plugin/releases/tag/${packageJson.version}`} target='_block' rel='noopener noreferrer'>
        {packageJson.version}
      </a> | <a href='https://discord.gg/VhdtjCh' target='_blank' rel='noopener noreferrer'>Get support</a>
    </>
  )

  return (
    <>
      {
        isPlugin
          ? <div className={'position-absolute w-100 pb-1 d-flex'} style={{ fontSize: 12, bottom: 0 }}>
            <div>
              <button
                className='btn btn-link ml-1 p-0'
                style={{ fontSize: 12, color: 'initial' }}
                onClick={openSettings}>
                <FontAwesomeIcon icon={faCog} size='lg' className='mr-1' />
                MythX Settings
              </button>
            </div>
            <div className='ml-auto'>{links}</div>
          </div>
          : <div className={'position-absolute text-center w-100 pb-1 text-white'} style={{ fontSize: 12, bottom: 0 }}>
            {links}
          </div>
      }
    </>
  )
}

Footer.propTypes = {
  isPlugin: PropTypes.bool,
  openSettings: PropTypes.func
}

export default Footer
