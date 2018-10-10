import React, {Component} from 'react';
import { connect } from 'react-redux';
import Form from './elementComponents/Form.jsx';
import Modal from './Modal.jsx';
import { FormInput } from './elementComponents/formControls.jsx';
import Button from './elementComponents/Button.jsx';
import Link from './elementComponents/Link.jsx';
import Div from './elementComponents/Div.jsx';
import SignupPage from './SignupPage.jsx';
import HomePage from './Home.jsx';
import dataFieldCollector from '../services/dataFieldCollector';
import signinHandler from '../services/signinHandler';
import {
  validateSigninForm,
  onFocusHandler,
} from '../services/formValidation.js';
import actions from '../../redux/actions';
import store from '../../redux/store';

export class SigninPage extends Component {

  loadHomePage() {
    store.dispatch(actions.displayPage(HomePage))
  }

  loadSignupPage() {
    store.dispatch(actions.displayPage(SignupPage))
  }

  componentDidMount() {
    store.dispatch(actions.setFormToFill('signin'));
  }

  render() {
    return (
      <div>
        <div id='logo-div-2' className='py-3 pl-5 bg-success'>
          <a href='#' className="text-white font-weight-bold" onClick={this.loadHomePage.bind(this)}>
            Repair-Zone
          </a>
        </div>
        <Modal />
        <div className='row'>
          <div id="login-div" className='card py-2 border-success px-5 col-10 offset-col-1 col-sm-6 col-md-4 offset-md-4 offset-sm-3'>
            <div className='card-body'>
              <form action="">
                <h3 className='card-title'>Sign In</h3>
                  <FormInput
                    divClass="my-2"
                    divId=""
                    labelValue="Username"
                    labelId=""
                    spanClass="required text-danger"
                    inputType='text' 
                    inputClass='ml-1 border-success form-control field-valid required' 
                    inputId='signin-2-username' 
                    placeholder='username' 
                    inputName='username'
                    validationClass="text-danger"
                    onFocus={onFocusHandler.bind(this)}
                    onChange={dataFieldCollector.bind(this)}
                    onMouseOut={validateSigninForm.bind(this)}
                    onBlur={validateSigninForm.bind(this)}
                    requiredField={true}
                  />
                  <FormInput
                    divClass="my-2"
                    divId=""
                    labelValue="password"
                    labelId=""
                    spanClass="required text-danger"
                    inputType="password"
                    inputClass="ml-1 border-success form-control field-valid required"
                    inputId="signin-2-password"
                    placeholder="password"
                    inputName="password"
                    validationClass="text-danger"
                    onFocus={onFocusHandler.bind(this)}
                    onMouseOut={validateSigninForm.bind(this)}
                    onBlur={validateSigninForm.bind(this)}
                    onChange={dataFieldCollector.bind(this)}
                    requiredField={true}
                  />
                <Button
                  buttonClass='ml-1 my-2 px-5 py-2 btn btn-sm bg-success text-white' 
                  buttonId='' 
                  buttonName='log-In'
                  onClick={signinHandler.bind(this)}
                />
                <p>
                  You don't have an account? <br />
                  <Link href='#' linkText='Sign Up' hrefClass='card-link' onClick={this.loadSignupPage.bind(this)} />
                  &nbsp;here
                </p>
                </form>
              </div>
            </div> 
        </div>
      </div>
    );
  }
}

export default connect()(SigninPage);
