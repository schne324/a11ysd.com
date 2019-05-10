import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';

export default class SkipLink extends Component {
  static propTypes = { focusMain: PropTypes.func.isRequired };
  state = {
    animationClass: ''
  };

  onFocus = () => {
    this.setState({
      animationClass: 'active'
    });
  };

  onBlur = () => {
    this.setState({ animationClass: '' });
  };

  render() {
    const { animationClass } = this.state;

    return (
      <a
        href="#main-heading"
        className={`SkipLink ${animationClass}`}
        onFocus={this.onFocus}
        onBlur={this.onBlur}
        onClick={this.props.focusMain}
      >
        Skip to main content
      </a>
    );
  }
}
