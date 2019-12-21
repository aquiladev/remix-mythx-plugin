import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Tooltip } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'

function InfoIcon ({ children, placement, ...props }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <FontAwesomeIcon className='ml-2' icon={faInfoCircle} {...props} />
      <Tooltip placement={placement}
        isOpen={isOpen}
        autohide={false}
        target={props.id}
        toggle={() => { setIsOpen(!isOpen) }}>
        {children}
      </Tooltip>
    </>
  )
}

InfoIcon.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node
}

export default InfoIcon
