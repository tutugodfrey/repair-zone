import React, {Component} from 'react';

export default class Link extends Component {
  render() {
    return <a href={this.props.href} id={this.props.linkId} className={this.props.linkClass} onClick={this.props.onClick} >
    {this.props.linkText}
    </a>
  }
}