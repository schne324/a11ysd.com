import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const IconLink = ({ icon, label, children, ...other }) => (
  <li className="IconLink">
    <a target="_blank" rel="noopener noreferrer" {...other}>
      <i className={`fab ${icon}`} aria-label={`${label} `} />
      {children}
    </a>
  </li>
);

IconLink.displayName = 'IconLink';
IconLink.propTypes = {
  icon: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired
};
export default IconLink;
