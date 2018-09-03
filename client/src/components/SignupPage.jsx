import React, {Component} from 'react';
import Form from './elementComponents/Form.jsx';
import { FormInput, CheckBox }from './elementComponents/formControls.jsx';
import Button from './elementComponents/Button.jsx';
import Link from './elementComponents/Link.jsx';
import Div from './elementComponents/Div.jsx';
import SigninPage from './SigninPage.jsx';
import Paragraph from './../components/elementComponents/Paragraph.jsx';
import HomePage from './Home.jsx';
import dataFieldCollector from '../services/dataFieldCollector';
import actions from '../../redux/actions';
import store from '../../redux/store';
import signupHandler from '../services/signupHandler';

export default class SignupPage extends Component {
  // render signin page when user
  // click the signin link
  componentDidMount() {
    store.dispatch(actions.setFormToFill('signup'));
  }

  loadSigninPage() {
    store.dispatch(actions.displayPage(SigninPage));
  }

  loadHomePage() {
    store.dispatch(actions.displayPage(HomePage));
  }

  componentDidMount() {
    store.dispatch(actions.setFormToFill('signup'));
  }
  // render the signup page
  formContent() {
    return <div>
    <div className='card-body'>
      <h3 className='card-title text-center' >Sign Up to start</h3>
      <div className='row'>
        <FormInput
          divClass="my-2 col-10 col-md-6 offset-col-1"
          divId=""
          labelValue="Fullname"
          labelId=""
          spanClass="required text-danger"
          inputType='text' 
          inputClass='my-2 ml-1 pt-1 border-success  form-control form-controls-md' 
          inputId='fullname' 
          inputPlaceholder='fullname' 
          inputName='fullname'
          onChange={dataFieldCollector.bind(this)}
        />
        <FormInput
          divClass="my-2 col-10 col-md-6 offset-col-1"
          divId=""
          labelValue="Username"
          labelId=""
          spanClass="required text-danger"
          inputType='text' 
          inputClass='ml-1 pt-1 border-success form-control form-controls-md' 
          inputId='username' 
          inputPlaceholder='username' 
          inputName='username'
          onChange={dataFieldCollector.bind(this)}
        />
        <FormInput
          divClass="my-2 col-10 col-md-6 offset-col-1"
          divId=""
          labelValue="Email"
          labelId=""
          spanClass="required text-danger"
          inputType='text' 
          inputClass='ml-1 pt-1 border-success form-control form-controls-md' 
          inputId='email' 
          inputPlaceholder='email' 
          inputName='email'
          onChange={dataFieldCollector.bind(this)}
        />
        <FormInput
          divClass="my-2 col-10 col-md-6 offset-col-1"
          divId=""
          labelValue="Address"
          labelId=""
          spanClass="required text-danger"
          inputType='text' 
          inputClass='ml-1 pt-1 border-success form-control form-controls-md' 
          inputId='address' 
          inputPlaceholder='address' 
          inputName='address'
          onChange={dataFieldCollector.bind(this)}
        />
        <FormInput
          divClass="my-2 col-10 col-md-6 offset-col-1"
          divId=""
          labelValue="Phone"
          labelId=""
          spanClass="required text-danger"
          inputType='text' 
          inputClass='ml-1 pt-1 border-success form-control form-controls-md' 
          inputId='phone' 
          inputPlaceholder='phone' 
          inputName='phone'
          onChange={dataFieldCollector.bind(this)}
        />
        <FormInput
          divClass="my-2 col-10 col-md-6 offset-col-1"
          divId=""
          labelValue="Profile Photo"
          labelId=""
          inputType='file' 
          inputClass='ml-1 pt-1 border-success form-control form-controls-md' 
          inputId='profile-photo'
          inputName='profile-photo'
          onChange={dataFieldCollector.bind(this)}
        />
        <FormInput
          divClass="my-2 col-10 col-md-6 offset-col-1"
          divId=""
          labelValue="Password"
          labelId=""
          spanClass="required text-danger"
          inputType='password'
          inputClass='ml-1 pt-3 border-success form-control'
          inputId='password'
          inputPlaceholder='password'
          inputName='password'
          onChange={dataFieldCollector.bind(this)}
        />
        <FormInput
          divClass="my-2 col-10 col-md-6 offset-col-1"
          divId=""
          labelValue="Confirm Password"
          labelId=""
          spanClass="required text-danger"
          inputType='password'
          inputClass='ml-1 pt-3 border-success form-control '
          inputId='confrm-password'
          inputPlaceholder='confirm-password'
          inputName='confirmPassword'
          onChange={dataFieldCollector.bind(this)}
        />
        <fieldset className='my-2 col-10 col-md-10 offset-col-1'>
          <legend>I am a service provider</legend>
          <CheckBox
            divClass=""
            divId=""
            labelId=""
            labelValue="Click here"
            spanClass="required text-danger"
            inputType='checkbox'
            inputClass='ml-1 pt-3 border-success form-control'
            inputId='is-admin'
            inputName='isAdmin'
            value='true'
            onChange={dataFieldCollector.bind(this)}
          /> <br />
          <FormInput
            divClass=""
            divId=""
            labelValue="Service Name"
            labelId=""
            spanClass="required text-danger"
            inputType='text'
            inputClass='ml-1 pt-3 border-success form-control'
            inputId='service-name'
            inputPlaceholder='Service Name'
            inputName='serviceName'
            onChange={dataFieldCollector.bind(this)}
          />
        </fieldset>
        <Button
          buttonClass='mx-5 my-3 px-5 py-2 bg-success offset-md-4 text-white' 
          buttonId='' 
          buttonName='Signup'
          onClick={signupHandler.bind(this)}
        />
      </div>
      </div>
      <Link href='#' hrefClass='card-link' hrefId='signin-link' linkText='Signin' onClick={this.loadSigninPage.bind(this)}/>
    </div>
  }

  renderForm() {
    return <Form content={this.formContent()}/>
  }
  render() {
    return <div>
      <div id='logo-div' className='d-inline'>
        <a href='#' onClick={this.loadHomePage.bind(this)}>
          <Paragraph paragraphClass='' paragraphId='' content='Repair-Zone' />
        </a>
      </div>
      <Div divId='signup-form' divClass='card py-4 my-5 col-sm-10 col-md-8 offset-md-2 border-success' content={this.renderForm()}/>
    </div>

  }
}
