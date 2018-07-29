import React, {Component} from 'react';
export default class Button extends Component {
  render() {
    return  (
      <button id = {this.props.buttonId} className= {this.props.buttionClass}>
      {this.props.btnName}
      </button>
    )
  }
}