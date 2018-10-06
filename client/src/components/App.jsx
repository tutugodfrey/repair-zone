import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  constructor () {
    super();
    this.state = {
    };
  }
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
