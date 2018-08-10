import React, {Component} from 'react';

export default class Options extends Component {
  constructor() {
    super();
    options = this.props.options;
  };

  option(optionField) {
    return <option value={optionField.optionValue} >
      {optionField.displayValue}
      </option>
  };

  render() {
    return options.map(option => option(option));
  };
}
