import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

export default class Nav extends Component {
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
            <Link to="/" innerRef={el => (this.firstItem = el)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/events/">Events</Link>
          </li>
          <li>
            <Link to="/sponsors/">Sponsors</Link>
          </li>
          <li>
            <Link to="/contact/">Contact</Link>
          </li>
        </ul>
      </nav>
    );
  }
}
