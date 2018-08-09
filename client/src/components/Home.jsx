import React, { Component } from 'react';
import Div from './../components/elementComponents/Div';
import Button from './../components/elementComponents/Button';


export default class Home extends Component {
  homeDescription(){
    return <Div content = {<h1> Welcome to repair zone</h1>}/>
  }
  makeRequest(){
    return <Div content = {<h1> Make Request</h1>} />;
  }
  trackProgress() {
    return <Div content = {<h1> Track Progress</h1>} />
  }
  contacts() {
    return <Div content = {<h1> Connect Via Messages</h1>} />
  }
  footer() {

  }

  render() {
    return (
      <div>
        <Div content = {this.homeDescription()}/>
        <Div content = {this.makeRequest()}/>
        <Div content = {this.trackProgress()} />
        <Div content = {this.contacts()} />
        <Button btnName = 'signup' />
      </div>
    )
  }
}