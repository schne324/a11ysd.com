import React from 'react';
import PropTypes from 'prop-types';
import MainHeading from '../MainHeading';
import './index.css';

const Card = ({ heading, children, footer }) => (
  <div className="Home__wrapper">
    <MainHeading>{heading}</MainHeading>
    <div className="Home__content">{children}</div>
    {footer && <div className="Home__wrapper--links">{footer}</div>}
  </div>
);

Card.propTypes = {
  heading: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  footer: PropTypes.node
};
Card.displayName = 'Card';
export default Card;
