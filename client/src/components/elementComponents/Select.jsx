import React, {Component} from 'react';	
import Options from './Options'	
 export default class Select extends Component {	
  constructor() {	
    super();	
    options = this.props.options;	
  }	
  constructOption(options) {	
   }	
    render () {	
    return <select	
      class={this.props.selectClass}	
      id={this.props.selectId}>	
      <Options options={this.props.options} />	
    </select>	
  }	
}
