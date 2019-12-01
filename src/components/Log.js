import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

function Log({ list = [] }) {
  return (
    <div className='row'>
      {
        list.slice(0, 5)
          .map((x, i) => {
            const link = `https://dashboard.mythx.io/#/console/analyses/${x.uuid}`;
            return (
              <div key={i} className='col-md-6 offset-md-3 pt-1 pb-1'>
                <span className='pr-2 text-secondary'>[{moment(x.timestamp).format('L LTS')}]</span>
                {x.mode === 'full' ? <FontAwesomeIcon icon={faClock} className='mr-2' /> : null}
                Your <b>{x.mode}</b> analysis has been submitted! Please see your results at
                <a href={link} className='pl-1' target='_blank' rel='noopener noreferrer'>{x.uuid}</a>
              </div>
            );
          })
      }
    </div>
  );
}

Log.propTypes = {
  list: PropTypes.array.isRequired,
};

export default Log;