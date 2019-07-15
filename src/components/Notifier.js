import React from 'react';
import PropTypes from 'prop-types';
import { AlertList } from 'react-bs-notifier';

function Notifier({ alerts, onDismissed }) {
  return (
    <AlertList
      position='bottom-right'
      alerts={alerts}
      timeout={3000}
      onDismiss={onDismissed}
      showIcon={false}
    />
  );
}

Notifier.propTypes = {
  alerts: PropTypes.array.isRequired,
  onDismissed: PropTypes.func.isRequired
};

export default Notifier;