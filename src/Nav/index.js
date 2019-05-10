import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './index.css';

export default class Nav extends Component {
  static propTypes = { focusMain: PropTypes.func.isRequired };
  state = { open: false };

  onClick = () => {
    this.setState(
      {
        open: !this.state.open
      },
      () => {
        if (this.state.open) {
          this.firstItem.focus();
        }
      }
    );
  };

  onKeyDown = e => {
    if (e.which !== 27) {
      return;
    }
    this.setState({ open: false });
    this.button.focus();
  };

  onNavItemClick = () => {
    this.setState({ open: false });
    this.props.focusMain();
  };

  render() {
    const { open } = this.state;
    return (
      <nav>
        <button
          aria-label={open ? 'Close Menu' : 'Show Menu'}
          onClick={this.onClick}
          ref={el => (this.button = el)}
        >
          <i
            className={`fas fa-${open ? 'times' : 'bars'}`}
            aria-hidden="true"
          />
        </button>
        <ul onKeyDown={this.onKeyDown} className={open ? 'open' : ''}>
          <li>
            <Link
              to="/"
              innerRef={el => (this.firstItem = el)}
              onClick={this.onNavItemClick}
            >
              Home
            </Link>
          </li>
          <li>
            <Link to="/events/" onClick={this.onNavItemClick}>
              Events
            </Link>
          </li>
          <li>
            <Link to="/sponsors/" onClick={this.onNavItemClick}>
              Sponsors
            </Link>
          </li>
          <li>
            <Link to="/contact/" onClick={this.onNavItemClick}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}
