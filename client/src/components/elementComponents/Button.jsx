import React, { Component } from 'react';

export default class Button extends Component {
  render() {
    return  (
      <button
        id={this.props.buttonId}
        className={this.props.buttonClass}
        onClick={this.props.onClick}>
        {this.props.buttonName}
      </button>
    );
  }
}

class NavButton extends Button {
  render() {
    return  (
      <button
        id={this.props.buttonId}
        className={this.props.buttonClass}
        data-toggle="collapse"
        data-target="#navbar-content"
        aria-controls="narbar-content"
        aria-expanded="false"
        aria-label="Toggle-navigation"
      >
        {this.props.buttonName}
      </button>
    )
  }
}

export {
  NavButton,
}
