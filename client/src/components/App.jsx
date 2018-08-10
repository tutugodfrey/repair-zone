import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../../redux/store';

class App extends Component {
  constructor () {
    super();
    this.state = {
    };
  }
  render() {
    let unsubscribe = store.subscribe(() =>{
      this.setState({
        home: store.getState().home,
      })
    });

    const Home = store.getState().home;
    return (
      <div>
        <Home store={this.props.store}/>
      </div>
    )
  }
}

export default connect()(App);
