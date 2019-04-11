import React from 'react';
import PropTypes from 'prop-types';

const MainHeading = ({ children, ...other }) => (
  <h3 id="main-heading" tabIndex={-1} {...other}>
    {children}
  </h3>
);

MainHeading.propTypes = {
  children: PropTypes.node.isRequired
};
MainHeading.displayName = 'MainHeading';
export default MainHeading;
