import React, { Component } from 'react';
import Div from './elementComponents/Div.jsx';
import Link from './elementComponents/Link.jsx';

export default class ViewRequest extends Component {
  viewRequest() {
    return (
      <div>
        view Request
      </div>
    )
  }
  render() {
    return <Div divId="" divClass="" content={this.viewRequest()} />
  }
}