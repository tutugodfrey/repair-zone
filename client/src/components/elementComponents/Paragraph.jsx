import React, {Component} from 'react';	
 export default class Paragragh extends Component {	
  render() {	
    return  (	
      <p id={this.props.paragraphId} className={this.props.paragraghClass}>	
      {this.props.content}	
      </p>	
    )	
  }	
}
