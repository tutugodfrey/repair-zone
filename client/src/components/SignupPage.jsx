import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Form from './elementComponents/Form.jsx';
import Modal from './Modal.jsx';
import { FormInput, CheckBox }from './elementComponents/formControls.jsx';
import Button from './elementComponents/Button.jsx';
import Link from './elementComponents/Link.jsx';
import Div from './elementComponents/Div.jsx';
import SigninPage from './SigninPage.jsx';
import HomePage from './Home.jsx';
import dataFieldCollector from '../services/dataFieldCollector';
import actions from '../../redux/actions';
import signupHandler from '../services/signupHandler';
import {
  validateSigninForm,
  onFocusHandler,
} from '../services/formValidation.js';

export class SignupPage extends Component {
  // render signin page when user
  // click the signin link
  componentDidMount() {
    this.props.setFormToFill('signup');
  }

  loadSigninPage() {
    this.props.displayPage(SigninPage);
  }

  loadHomePage() {
    this.props.displayPage(HomePage);
  }
<<<<<<< HEAD
=======

  componentDidMount() {
    store.dispatch(actions.setFormToFill('signup'));
  }
>>>>>>> feat(signin): implement signin
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
          inputClass='ml-1 pt-1 border-success  form-control form-controls-md field-valid required' 
          inputId='fullname'
          validationClass="text-danger"
          inputPlaceholder='fullname' 
          inputName='fullname'
          onFocus={onFocusHandler.bind(this)}
          onChange={dataFieldCollector.bind(this)}
          onMouseOut={validateSigninForm.bind(this)}
          onBlur={validateSigninForm.bind(this)}
          requiredField={true}
        />
        <FormInput
          divClass="my-2 col-10 col-md-6 offset-col-1"
          divId=""
          labelValue="Username"
          labelId=""
          spanClass="required text-danger"
          inputType='text' 
          inputClass='ml-1 pt-1 border-success form-control form-controls-md field-valid required' 
          inputId='username'
          validationClass="text-danger"
          inputPlaceholder='username' 
          inputName='username'
          onFocus={onFocusHandler.bind(this)}
          onChange={dataFieldCollector.bind(this)}
          onMouseOut={validateSigninForm.bind(this)}
          onBlur={validateSigninForm.bind(this)}
          requiredField={true}
        />
        <FormInput
          divClass="my-2 col-10 col-md-6 offset-col-1"
          divId=""
          labelValue="Email"
          labelId=""
          spanClass="required text-danger"
          inputType='text' 
          inputClass='ml-1 pt-1 border-success form-control form-controls-md field-valid required' 
          inputId='email'
          validationClass="text-danger"
          inputPlaceholder='email' 
          inputName='email'
           onFocus={onFocusHandler.bind(this)}
          onChange={dataFieldCollector.bind(this)}
          onMouseOut={validateSigninForm.bind(this)}
          onBlur={validateSigninForm.bind(this)}
          requiredField={true}
        />
        <FormInput
          divClass="my-2 col-10 col-md-6 offset-col-1"
          divId=""
          labelValue="Address"
          labelId=""
          spanClass="required text-danger"
          inputType='text' 
          inputClass='ml-1 pt-1 border-success form-control form-controls-md field-valid required' 
          inputId='address'
          validationClass="text-danger"
          inputPlaceholder='address' 
          inputName='address'
          onFocus={onFocusHandler.bind(this)}
          onChange={dataFieldCollector.bind(this)}
          onMouseOut={validateSigninForm.bind(this)}
          onBlur={validateSigninForm.bind(this)}
          requiredField={true}
        />
        <FormInput
          divClass="my-2 col-10 col-md-6 offset-col-1"
          divId=""
          labelValue="Phone"
          labelId=""
          spanClass="required text-danger"
          inputType='text' 
          inputClass='ml-1 pt-1 border-success form-control form-controls-md field-valid required' 
          inputId='phone'
          validationClass="text-danger"
          inputPlaceholder='phone' 
          inputName='phone'
           onFocus={onFocusHandler.bind(this)}
          onChange={dataFieldCollector.bind(this)}
          onMouseOut={validateSigninForm.bind(this)}
          onBlur={validateSigninForm.bind(this)}
          requiredField={true}
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
          inputClass='ml-1 pt-3 border-success form-control field-valid required'
          inputId='password'
          validationClass="text-danger"
          inputPlaceholder='password'
          inputName='password'
          onFocus={onFocusHandler.bind(this)}
          onChange={dataFieldCollector.bind(this)}
          onMouseOut={validateSigninForm.bind(this)}
          onBlur={validateSigninForm.bind(this)}
          requiredField={true}
        />
        <FormInput
          divClass="my-2 col-10 col-md-6 offset-col-1"
          divId=""
          labelValue="Confirm Password"
          labelId=""
          spanClass="required text-danger"
          inputType='password'
          inputClass='ml-1 pt-3 border-success form-control field-valid required'
          inputId='confrm-password'
          validationClass="text-danger"
          inputPlaceholder='confirm-password'
          inputName='confirmPassword'
          onFocu={onFocusHandler.bind(this)}
          onChange={dataFieldCollector.bind(this)}
          onMouseOut={validateSigninForm.bind(this)}
          onBlur={validateSigninForm.bind(this)}
          requiredField={true}
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
            inputClass='ml-1 pt-3 border-success form-control required field-valid'
            inputId='service-name'
            validationClass="text-danger"
            inputPlaceholder='Service Name'
            inputName='serviceName'
            onFous={onFocusHandler.bind(this)}
            onChange={dataFieldCollector.bind(this)}
            onMouseOut={validateSigninForm.bind(this)}
            onBlur={validateSigninForm.bind(this)}
          />
        </fieldset>
        <div className="my-2 col-10 col-md-6">
          <Button
            buttonClass='my-3 px-5 py-2 bg-success rounded text-white' 
            buttonId='' 
            buttonName='Signup'
            onClick={signupHandler.bind(this)}
          />
        </div>
      </div>
      </div>
      <p>I have an account already!&nbsp;
      <Link href='#' hrefClass='card-link' hrefId='signin-link' linkText='Signin here' onClick={this.loadSigninPage.bind(this)}/>
      </p>
    </div>
  }

  renderForm() {
    return <Form content={this.formContent()}/>
  }
  render() {
    return (
      <div className="">
        <div id='logo-div-2' className='py-3 pl-5 bg-success'>
          <a href='#' className="text-white font-weight-bold" onClick={this.loadHomePage.bind(this)}>
            Repair-Zone
          </a>
        </div>
        <Modal />
        <Div divId='signup-form' divClass='card py-4 my-5 col-9 col-sm-6 col-md-8 col-lg-6 offset-2 offset-sm-3 offset-md-2 offset-lg-3 border-success' content={this.renderForm()}/>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  const { setFormToFill, displayPage} = actions;
  return bindActionCreators({
    setFormToFill,
    displayPage,
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(SignupPage);
