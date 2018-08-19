import React, {Component} from 'react';
import Form from './elementComponents/Form.jsx';
import FormInput from './elementComponents/FormInput.jsx';
import Button from './elementComponents/Button.jsx';
import Link from './elementComponents/Link.jsx';
import Div from './elementComponents/Div.jsx';
import Label from './elementComponents/Label.jsx';
import SignupPage from './SignupPage.jsx';
import HomePage from './Home.jsx';
import Paragraph from './../components/elementComponents/Paragraph.jsx';
import dataFieldCollector from '../services/dataFieldCollector';
import actions from '../../redux/actions';
import store from '../../redux/store';

export default class SigninPage extends Component {


  handleLogin() {
    
  }

  loadHomePage() {
    store.dispatch(actions.displayPage(HomePage))
  }

  loadSignupPage() {
    store.dispatch(actions.displayPage(SignupPage))
  }
  componentDidMount() {
    store.dispatch(actions.setFormToFill('signin'))
  }

  formContent() {
    return <div className=''>
      <div className='row'>
        <div className='card-body'>
        <h3 className='card-title'>Sign In</h3>
        <div className=''>
          <Label labelFor='signin-2-username' labelId='' content='Username' />
          <span className="required text-danger">*</span>
          <FormInput
            inputType='text' 
            inputClass='ml-1 border-success form-control' 
            inputId='signin-2-username' 
            inputPlaceholder='username' 
            inputName='username'
            onChange={dataFieldCollector.bind(this)}
          />
        </div>
        <div className=''>
          <Label labelFor='signin-2-password' labelId='' content='Password' />
          <span className="required text-danger">*</span>
          <FormInput
            inputType='text'
            inputClass='ml-1 border-success form-control'
            inputId='signin-2-password'
            inputPlaceholder='password'
            inputName='password'
            onChange={dataFieldCollector.bind(this)} />
        </div>
        <Button
        buttonClass='ml-1 my-2 px-5 py-2 btn btn-sm bg-success text-white' 
        buttonId='' 
        buttonName='log-In'
        onClick={this.handleLogin.bind(this)} />
        </div>
      </div>
      <p>
        You don't have an account?<br />
        <Link href='#' linkText='Sign Up' hrefClass='card-link' onClick={this.loadSignupPage.bind(this)} />
        here
      </p>
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
      <Div divId='login-div' divClass='card py-5 border-success px-5 col-md-6 offset-md-3' content={this.renderForm()}/>
    </div>
  }
}
