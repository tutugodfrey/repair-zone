import React, {Component} from 'react';
import Div from './../components/Div';
import Button from './../components/Button';

export default class App extends Component {
  render() {
    return (
      <div>
        <Div content = {<h1> Welcome to repair zone pro</h1>}/>
        <Div content= {<h1> Make Requests </h1>}/>
        <Div content= {<h1> Track Progress</h1>} />
        <Div content= {<h1> Connect Via Messages</h1>} />
        <Button btnName = 'signup' />
      </div>
    )
  }
}