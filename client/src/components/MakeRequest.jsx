import React, { Component } from 'react';
import Div from './elementComponents/Div.jsx';
import Link from './elementComponents/Link.jsx';

export default class MakeRequest extends Component {
  requestForm() {
    return (
      <div>
        make request
      </div>
    )
  }
  render() {
    return <Div divId="" divClass="" content={this.requestForm()} />
  }
}