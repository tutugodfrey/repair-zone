import React, {Component} from 'react';

export default class FormOptions extends Component {
  option(optionField) {
    if(typeof optionField === 'string') {
      return <option value={optionField} key={optionField} >
      {optionField}
      </option>
    }
    if(typeof optionField === 'object') {
      return <option value={optionField.id} key={optionField.id} >
      {optionField.serviceName}
      </option>
    }
  };

  render() {
    return this.props.options.map(option => this.option(option));
  };
}
