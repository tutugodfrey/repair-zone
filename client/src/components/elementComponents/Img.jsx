import React, { Component } from 'react';

export default class Img extends Component {
  render() {
    return <img src={this.props.imgSrc} alt={this.props.imgAlt}/>
  };
}
