import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Tooltip } from 'reactstrap';

function ExternalLink({ children, ...props }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <a {...props}>{children}</a>
      <Tooltip placement='top'
        isOpen={isOpen}
        target={props.id}
        toggle={() => { setIsOpen(!isOpen); }}>
        CTRL + Click
      </Tooltip>
    </>
  );
}

ExternalLink.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node
};

export default ExternalLink;