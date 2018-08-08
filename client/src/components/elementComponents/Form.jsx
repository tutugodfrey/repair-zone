import React, {Component} from 'react';

export default class Form extends Component {
  render() {
    return  (
      <form id={this.props.formId} className={this.props.formClass}>
      {this.props.content}
      </form>
    )
  }
}
