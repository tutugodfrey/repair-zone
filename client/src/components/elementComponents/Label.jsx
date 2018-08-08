import React, {Component} from 'react';

export default class Label extends Component {
  render() {
    return <label id={this.props.labelId} for={this.props.labelFor}>
      {this.props.content}
    </label>
  }
}