import React from 'react'
import PropTypes from 'prop-types'
import { AlertList } from 'react-bs-notifier'

function Notifier ({ alerts, onDismiss }) {
  return (
    <AlertList
      position='bottom-right'
      alerts={alerts}
      timeout={3000}
      onDismiss={onDismiss}
      showIcon={false}
    />
  )
}

Notifier.propTypes = {
  alerts: PropTypes.array.isRequired,
  onDismiss: PropTypes.func.isRequired
}

export default Notifier
