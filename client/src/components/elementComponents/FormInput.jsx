import React, {Component} from 'react';

export default class InputForm extends Component {
  render() {
      return <input 
    type={this.props.inputType} 
    name={this.props.inputName} 
    id={this.props.inputId}
    value={this.props.value}
    placeholder={this.props.inputPlaceholder} 
    className={this.props.inputClass}
    onChange={this.props.onChange} />
  };
}
