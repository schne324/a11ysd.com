import React, { Component } from 'react';
import './index.css';

export default class SkipLink extends Component {
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

  onClick = () => document.getElementById('main-heading').focus();

  render() {
    const { animationClass } = this.state;

    return (
      <a
        href="#main-heading"
        className={`SkipLink ${animationClass}`}
        onFocus={this.onFocus}
        onBlur={this.onBlur}
        onClick={this.onClick}
      >
        Skip to main content
      </a>
    );
  }
}
