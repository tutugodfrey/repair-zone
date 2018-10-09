import React, { Component } from 'react';
import { connect } from 'react-redux';

export class App extends Component {
  render() {
    const Home = this.props.home;
    return (
      <div>
        <Home />
      </div>
    )
  }
}

export const mapStateToProps = (state) => {
  const { home } = state;
  return {
    home,
  }
}

export default connect(mapStateToProps)(App);
