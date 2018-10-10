import React, {Component} from 'react';
import { connect } from 'react-redux';
import Form from './elementComponents/Form.jsx';
import { FormInputWithoutDiv } from './elementComponents/formControls.jsx';
import Button from './elementComponents/Button.jsx';
import actions from '../../redux/actions';
import dataFieldCollector from '../services/dataFieldCollector';
import signinHandler from '../services/signinHandler';
import {
  validateSigninForm,
  onFocusHandler,
} from '../services/formValidation.js';

export class InlineLogin extends Component {
  componentDidMount() {
    this.props.dispatch(actions.setFormToFill('signin'));
  }

  formContent() {
    return (
      <div id='home-page-login' className='d-none d-md-block'>
        <FormInputWithoutDiv
          inputType='text' 
          inputClass='ml-1 border-0 rounded py-1 px-2 field-valid required' 
          inputId='signin-1-username' 
          inputPlaceholder='username' 
          inputName='username'
          onFocus={onFocusHandler.bind(this)}
          onChange={dataFieldCollector.bind(this)}
          onMouseOut={validateSigninForm.bind(this)}
          onBlur={validateSigninForm.bind(this)}
        />
        <span className="text-danger"></span>
        <FormInputWithoutDiv
          inputType='password'
          inputClass='ml-1 border-0 rounded py-1 px-2 field-valid required'
          inputId='signin-1-password'
          inputPlaceholder='password'
          inputName='password'
          onFocus={onFocusHandler.bind(this)}
          onChange={dataFieldCollector.bind(this)}
          onMouseOut={validateSigninForm.bind(this)}
          onBlur={validateSigninForm.bind(this)}
        />
        <span className={this.props.validationClass}></span>
        <Button
        buttonClass='ml-1 bg-success text-white border-0 rounded py-1 px-2' 
        buttonId='login-1-btn' 
        buttonName='Log-In'
        onClick={signinHandler.bind(this)} />
      </div>
    );
  }
  
  render() {
    return <Form formId="inline-signin-form" formClass="" content={this.formContent()} />
  }
}

export default connect()(InlineLogin);
