import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Collapse } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faAngleRight, faAngleDown } from '@fortawesome/free-solid-svg-icons';

import IssueSteps from './IssueSteps';
import { isFatal } from './../lib/eslint';

function Issue({ issue, highlightIssue }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
      <div>
        {
          issue.error ?
            <div className='alert alert-danger p-1'>
              {issue.error}
            </div> :
            <>
              <div className='d-flex flex-row'>
                <button onClick={toggle} className='btn btn-link align-self-center pl-0 pr-2'>
                  <FontAwesomeIcon icon={isOpen ? faAngleDown : faAngleRight} />
                </button>
                <button type='button'
                  className={`btn ${isFatal(issue.fatal, issue.severity) ? 'btn-danger' : 'btn-warning'} text-left p-1 mb-1 w-100`}
                  onClick={() => { highlightIssue(issue); }}>
                  {issue.sourceType === 'raw-bytecode' &&
                    <span title='raw-bytecode'>
                      <FontAwesomeIcon className='float-right' style={{ fontSize: 10 }} icon={faCode} />
                    </span>
                  }
                  <span className='pr-2'>{`[${issue.line + 1}:${issue.column}]`}</span>
                  {issue.message}
                </button>
              </div>
              <Collapse isOpen={isOpen}>
                <div className='pl-3 pb-3'>
                  <div style={{ fontSize: 13 }}>
                    {issue.description}
                    {issue.ruleId && <a href={issue.ruleLink} className='pl-1' target='_blank' rel='noopener noreferrer'>[{issue.ruleId}]</a>}
                  </div>
                  <IssueSteps issue={issue.origin} />
                </div>
              </Collapse>
            </>
        }
      </div>
    </>
  );
}

Issue.propTypes = {
  issue: PropTypes.object.isRequired,
  highlightIssue: PropTypes.func.isRequired
};

export default Issue;