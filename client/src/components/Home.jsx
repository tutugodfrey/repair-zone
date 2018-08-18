import React, { Component } from 'react';
import Div from './../components/elementComponents/Div.jsx';
import Link from './../components/elementComponents/Link.jsx';
import Paragraph from './../components/elementComponents/Paragraph.jsx';
import InlineLogin from './InlineLogin.jsx';
import SigninPage from './SigninPage.jsx';
import SignupPage from './SignupPage.jsx';
import store from '../../redux/store';
import actions from '../../redux/actions';

export default class Home extends Component {
  handleSigninLink() {
    store.dispatch(actions.displayPage(SigninPage));
  }

  handleSignupLink() {
    store.dispatch(actions.displayPage(SignupPage));
  }

  homeNav() {
    return <div id='home-nav' className=''>
        <div id='logo-div' className='d-inline'>
          <a>
            <Paragraph paragraphClass='' paragraphId='' content='Repair-Zone' />
          </a>
        </div>
        <div id='home-signin-signup' className='d-inline'>
          <Link linkClass='mr-1' href='#' linkId='#' linkText='Signup' onClick={this.handleSignupLink.bind(this)} />
          <Link linkClass='mr-1' href='#' linkId='#' linkText='Signin' onClick={this.handleSigninLink.bind(this)}/>
        </div>
      </div>
  }

  homeDescription() {
    return <div className='d-flex flex-column'>
      {this.homeNav()}
      <div id='app-description'>
      <h1> Welcome to repair zone</h1><br /><p>We connect Service providers to potential clients</p>
      </div>
      <InlineLogin formClass='form-inline' formId='home-login' />
      </div>
  }

  makeRequest(){
    return <div className='section d-flex flex-column' >
      <h1 className='section-title justify-self-center'>Make Request</h1>
      <p>
        Search for service providers specialize in areas specific to your repair need.
        Make repair or maintenance request specifying your issues
      </p>
    </div>
  }

  trackProgress() {
    return <div className='section' >
      <h1 className='section-title'>Track Progress</h1>
    </div>
  }

  contacts() {
    return <div className='section' >
      <h1 className='section-title'>Messaging</h1>
    </div>
  }

  footer() {
    return <Link
    linkClass='px-5 text-center text-white'
    href = '#'
    linkId='home-signup-btn-2'
    linkText='signup'
    onClick={this.handleSignupLink.bind(this)} />
  }

  render() {
    return (
      <div id='home-page' className='container-fluid'>
        <div className=''>
          <div className=''>
            <Div divId='home-description' divClass='' content={this.homeDescription()}/>
            <Div divId='make-requests' divClass='' content={this.makeRequest()}/>
            <Div divId='track-progress' divClass='' content={this.trackProgress()} />
            <Div divId='contacts' divClass='' content={this.contacts()} />
            <Div divId='home-footer' divClass='' content={this.footer()} />
          </div>
        </div>
      </div>
    )
  }
}
