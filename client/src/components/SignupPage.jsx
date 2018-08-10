//SignupPage.jsx component

import React, {Component} from 'react';
import Form from './elementComponents/Form.jsx';
import FormInput from './elementComponents/FormInput.jsx';
import Button from './elementComponents/Button.jsx';
import Link from './elementComponents/Link.jsx';
import Div from './elementComponents/Div.jsx';

export default class SigninPage extends Component {
  getUsername() {

  }
  getPassword() {

  }
  handleLogin() {
    
  }
  formContent() {
    return <div>
        <h3>Sign Up to start tracking your repair</h3>
        <FormInput
        inputType='text' 
        inputClass='ml-1 form-controls-md' 
        inputId='fullname' 
        inputPlaceholder='fullname' 
        inputName='fullname'
        onChange={this.getUsername.bind(this)}/>
        <FormInput
        inputType='text' 
        inputClass='ml-1 form-controls-md' 
        inputId='signin-2-username' 
        inputPlaceholder='username' 
        inputName='username'
        onChange={this.getUsername.bind(this)}/>
        <FormInput
        inputType='text' 
        inputClass='ml-1 form-controls-md' 
        inputId='email' 
        inputPlaceholder='email' 
        inputName='email'
        onChange={this.getUsername.bind(this)}/>
        <FormInput
        inputType='text'
        inputClass='ml-1'
        inputId='signin-2-password'
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

  renderForm() {
    return <Form content={this.formContent()}/>
  }
  render() {
    return <Div divId='' divClass='' content={this.renderForm()}/>
  }
}
