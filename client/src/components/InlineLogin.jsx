import React, {Component} from 'react';
import Form from './elementComponents/Form.jsx';
import FormInput from './elementComponents/FormInput.jsx';
import Button from './elementComponents/Button.jsx';
import dataFiledCollecotor from '../services/dataFieldCollector';

export default class InlineLogin extends Component {
  constructor() {
    super();
    this.state = {}
  }

  getPassword(event) {
    event.preventDefault();
    this.setState({
      password: event.target.value,
    });
  }
  getUsername(event) {
    event.preventDefault();
    this.setState({
      username: event.target.value,
    });
  }
  handleLogin(event) {
    event.preventDefault();
    const password = this.state.password;
    const username = this.state.username;
  }
  formContent() {
    return <div id='home-page-login' className='d-flex flex-row d-sm-none d-md-block'>
      <FormInput
      inputType='text' 
      inputClass='ml-1 form-controls-md' 
      inputId='signin-1-username' 
      inputPlaceholder='username' 
      inputName='username'
      onChange={this.getUsername.bind(this)}/>
      <FormInput
      inputType='text'
      inputClass='ml-1'
      inputId='signin-1-password'
      inputPlaceholder='password'
      inputName='password'
      onChange={this.getPassword.bind(this)} />
      <Button
      buttonClass='ml-1 bg-success text-white' 
      buttonId='' 
      buttonName='log-In'
      onClick={this.handleLogin.bind(this)} />
      </div>
  }
  render() {
    return <Form formId='' formClass='' content={this.formContent()} />
  }
}
