import React, {Component} from 'react';
import Form from './elementComponents/Form.jsx';
import FormInput from './elementComponents/FormInput.jsx';
import Button from './elementComponents/Button.jsx';
import actions from '../../redux/actions';
import store from '../../redux/store';
import dataFiledCollector from '../services/dataFieldCollector';
import signinHandler from '../services/signinHandler'

export default class InlineLogin extends Component {
  componentDidMount() {
    store.dispatch(actions.setFormToFill('signin'));
  }

  formContent() {
    return <div id='home-page-login' className='d-flex flex-row d-sm-none d-md-block'>
      <FormInput
      inputType='text' 
      inputClass='ml-1 form-controls-md' 
      inputId='signin-1-username' 
      inputPlaceholder='username' 
      inputName='username'
      onChange={dataFiledCollector.bind(this)}/>
      <FormInput
      inputType='password'
      inputClass='ml-1'
      inputId='signin-1-password'
      inputPlaceholder='password'
      inputName='password'
      onChange={dataFiledCollector.bind(this)} />
      <Button
      buttonClass='ml-1 bg-success text-white' 
      buttonId='' 
      buttonName='log-In'
      onClick={signinHandler.bind(this)} />
      </div>
  }
  
  render() {
    return <Form formId="inline-signin-form" formClass="" content={this.formContent()} />
  }
}
