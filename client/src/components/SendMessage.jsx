import React, { Component } from 'react';
import Div from './elementComponents/Div.jsx';
import Link from './elementComponents/Link.jsx';

export default class Header extends Component {
  sendMessage() {
    return (
      <div>
        send messages
      </div>
    )
  }
  render() {
    return <Div divId="" divClass="" content={this.sendMessage()} />
  }
}