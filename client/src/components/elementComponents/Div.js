import React, {Component} from 'react';

export default class Div extends Component {
  render() {
    return  (
      <div id = {this.props.divId} className= {this.props.divClass}>
      {this.props.content}
      </div>
    )
  }
}