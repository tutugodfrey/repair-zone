//SignupPage.jsx component

import React, {Component} from 'react';
import Form from './elementComponents/Form.jsx';
import FormInput from './elementComponents/FormInput.jsx';
import Button from './elementComponents/Button.jsx';
import Link from './elementComponents/Link.jsx';
import Div from './elementComponents/Div.jsx';
import Label from './elementComponents/Label.jsx';
import dataFieldCollecotor from '../services/dataFieldCollector';
import formSubmitter from '../services/formSubmitter'

export default class SigninPage extends Component {

  // get signup data from redux store
  // make api request
  handleLogin(event) {
    event.preventDefault();
  }

  // render signin page when user
  // click the signin link
  loadLoginPage() {
    event.preventDefault();
  }

  // render the signup page
  formContent() {
    return <div>
    <div className='card-body'>
      <h3 className='card-title text-center' >Sign Up to start</h3>
      <div className='row'>
        <div className='my-2 col-10 col-md-6 offset-col-1' >
          <Label id='' labelFor='fullname' content='Fullname' />
          <span className="required text-danger">*</span>
          <FormInput
            inputType='text' 
            inputClass='my-2 ml-1 pt-1 border-success  form-control form-controls-md' 
            inputId='fullname' 
            inputPlaceholder='fullname' 
            inputName='fullname'
            onChange={this.state = dataFieldCollecotor.bind(this)}
          />
        </div>
        <div col className=' my-2 col-10 col-md-6 offset-col-1'>
          <Label id='' labelFor='username' content='Username' />
          <span className="required text-danger">*</span>
          <FormInput
            inputType='text' 
            inputClass='ml-1 pt-1 border-success form-control form-controls-md' 
            inputId='username' 
            inputPlaceholder='username' 
            inputName='username'
            onChange={dataFieldCollecotor.bind(this)}
          />
        </div>
        <div className='my-2 col-10 col-md-6 offset-col-1'>
          <Label id='' labelFor='email' content='Email' />
          <span className="required text-danger">*</span>
          <FormInput
            inputType='text' 
            inputClass='ml-1 pt-1 border-success form-control form-controls-md' 
            inputId='email' 
            inputPlaceholder='email' 
            inputName='email'
            onChange={dataFieldCollecotor.bind(this)}
          />
        </div>
        <div className='my-2 col-10 col-md-6 offset-col-1'>
          <Label id='' labelFor='address' content='Address' />
          <span className="required text-danger">*</span>
          <FormInput
            inputType='text' 
            inputClass='ml-1 pt-1 border-success form-control form-controls-md' 
            inputId='address' 
            inputPlaceholder='address' 
            inputName='address'
            onChange={dataFieldCollecotor.bind(this)}
          />
        </div>
        <div className='my-2 col-10 col-md-6 offset-col-1'>
          <Label id='' labelFor='phone' content='Phone' />
          <span className="required text-danger">*</span>
          <FormInput
            inputType='text' 
            inputClass='ml-1 pt-1 border-success form-control form-controls-md' 
            inputId='phone' 
            inputPlaceholder='phone' 
            inputName='phone'
            onChange={dataFieldCollecotor.bind(this)}
          />
        </div>
        <div className='my-2 col-10 col-md-6 offset-col-1'>
          <Label id='' labelFor='profile-photo' content='Profile Photo' />
          <FormInput
            inputType='file' 
            inputClass='ml-1 pt-1 border-success form-control form-controls-md' 
            inputId='profile-photo'
            inputName='profile-photo'
            onChange={dataFieldCollecotor.bind(this)}
          />
        </div>
        <div className='my-2 col-10 col-md-6 offset-col-1'>
          <Label id='' labelFor='password' content='Password' />
          <span className="required text-danger ">*</span>
          <FormInput
            inputType='text'
            inputClass='ml-1 pt-3 border-success form-control'
            inputId='password'
            inputPlaceholder='password'
            inputName='password'
            onChange={dataFieldCollecotor.bind(this)}
          />
        </div>
        <div className='my-2 col-10 col-md-6 offset-col-1'>
          <Label id='' labelFor='confirm-password' content='Confirm Password' />
          <span className="required text-danger">*</span>
          <FormInput
            inputType='text'
            inputClass='ml-1 pt-3 border-success form-control '
            inputId='confrm-password'
            inputPlaceholder='confirm-password'
            inputName='confirm-password'
            onChange={dataFieldCollecotor.bind(this)}
          />
        </div>
        <fieldset className='my-2 col-10 col-md-10 offset-col-1'>
          <legend>I am a service provider</legend>
          <FormInput
            inputType='checkbox'
            inputClass='ml-1 pt-3 border-success form-control'
            inputId='is-admin'
            inputName='is-admin'
            value='true'
            onChange={dataFieldCollecotor.bind(this)}
          />
          <Label id='' labelFor='is-admin' content='Check here' /> <br />
          <Label id='' labelFor='service-name' content='Service Name' />
          <FormInput
            inputType='text'
            inputClass='ml-1 pt-3 border-success form-control'
            inputId='service-name'
            inputPlaceholder='Service Name'
            inputName='service-name'
            onChange={dataFieldCollecotor.bind(this)}
          />
        </fieldset>
        <Button
          buttonClass='mx-5 my-3 px-5 py-2 bg-success offset-md-4 text-white' 
          buttonId='' 
          buttonName='Signup'
          onClick={formSubmitter.bind(this)}
        />
      </div>
      </div>
      <Link href='#' hrefClass='card-link' hrefId='signin-link' linkText='Signin' onClick={this.loadLoginPage.bind(this)}/>
    </div>
  }

  renderForm() {
    return <Form content={this.formContent()}/>
  }
  render() {
    return <Div divId='signup-form' divClass='card py-4 my-5 col-sm-10 col-md-8 offset-md-2 border-success' content={this.renderForm()}/>
  }
}
