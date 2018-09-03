import React, { Component } from 'react';
import Div from './elementComponents/Div.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Content from './Content.jsx';

export default class Dashboard extends Component {
  dashboardContent() {
    return (
      <div>
        <Header />
        <Content />
        <Footer />
      </div>
    )
  }
  render() {
    return <Div divId="" divClass="" content={this.dashboardContent()} />
  }
}