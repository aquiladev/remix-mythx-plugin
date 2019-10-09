import React from 'react';
import PropTypes from 'prop-types';
import * as moment from 'moment';

import ExternalLink from './ExternalLink';

function Output({ log = [] }) {
  return (
    <div className='row'>
      {
        log.map((x, i) => {
          const link = `https://dashboard.mythx.io/#/console/analyses/${x.uuid}`;
          return (
            <div key={i} className='col-md-6 offset-md-3 pt-1 pb-1'>
              <span className='pr-2 text-secondary'>[{moment(x.timestamp).format('L LTS')}]</span>
              Your <b>{x.mode}</b> analysis has been submitted! Please see your results at
              <ExternalLink
                id={`l${i}`}
                href={link}
                className="pl-1"
                target="_blank"
                rel="noopener noreferrer">
                {x.uuid}
              </ExternalLink>
            </div>
          );
        })
      }
    </div>
  );
}

Output.propTypes = {
  log: PropTypes.array.isRequired,
};

export default Output;