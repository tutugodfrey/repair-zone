import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  constructor () {
    super();
    this.state = {
    };
  }
  render() {
    let unsubscribe = this.props.store.subscribe(() =>{
      this.setState({
        home: this.props.store.getState().home,
      })
    });

    const state = this.props.store.getState();
    return (
      <div>
        <state.home store={this.props.store}/>
      </div>
    )
  }
}

export default connect()(App);
