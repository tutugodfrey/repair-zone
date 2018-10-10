import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from './Modal.jsx';
import Div from './../components/elementComponents/Div.jsx';
import Link from './../components/elementComponents/Link.jsx';
import InlineLogin from './InlineLogin.jsx';
import SigninPage from './SigninPage.jsx';
import SignupPage from './SignupPage.jsx';
import displayUserDashboard from '../services/displayUserDashboard';
import actions from '../../redux/actions';

export class Home extends Component {
  componentWillMount() {
    if (localStorage.getItem('userData')) {
      displayUserDashboard();
    }
  }

  handleSigninLink = () => {
    this.props.dispatch(actions.displayPage(SigninPage));
  }

  handleSignupLink = () => {
    this.props.dispatch(actions.displayPage(SignupPage));
  }
  
  homeNav() {
    return <div id='home-nav' className=''>
      <div id='logo-div' className='d-inline'>
          <Link href="#" linkClass='text-white font-weight-bold' linkId='home-logo' linkText='Repair-Zone' />
      </div>
      <div id='home-signin-signup' className='d-inline'>
        <Link linkClass='mr-1 text-white border rounded py-1 px-2' href='#' linkId='#' linkText='Signup' onClick={this.handleSignupLink.bind(this)} />
        <Link linkClass='mr-1 text-white d-md-none d-inline border rounded py-1 px-2' href='#' linkId='#' linkText='Signin' onClick={this.handleSigninLink.bind(this)}/>
      </div>
    </div>
  }

  homeDescription = () => {
    return (
      <div className="bg-overlay">
        <div className='d-flex flex-column'>
          {this.homeNav()}
          <div id='app-description'>
          <h1> Welcome to repair zone</h1><br /><p>We connect Service providers to potential clients</p>
          </div>
          <Modal />
          <InlineLogin formClass='form-inline' formId='home-login' />
        </div>
      </div>
    );
  }

  makeRequest = () => {
    return (
      <div className='py-5 px-3 section d-flex flex-md-row flex-column' >
        <div id="make-request-description" className="p-2 d-flex flex-column justify-content-center align-self-center">
          <h1 className='section-title align-self-center'>Make Request</h1>
          <p className="align-self-center">
            Stop looking around for service providers when your stuff go bad!
            Repair Zone brings all available service providers to your desktop.
            Log your request with a service provider specialized in your equipment type
          </p>
        </div>
        <div id="make-request-image-div"className="p-2 d-flex justify-content-center align-self-center">
          <img id="make-request-image" src="./images/typing-on-laptop.jpg" className="rounded-circle" alt="make request" />
        </div>
      </div>
    );
  }

  trackProgress = () => {
    return <div className='py-5 px-3 section d-flex flex-md-row flex-column' >
      <div id="track-progress-image-div"className="p-2 d-flex justify-content-center align-self-center">
        <img id="track-progress-image" src="./images/making-call.jpeg" className="rounded" alt="make request" />
      </div>
      <div id="make-request-description" className="p-2 d-flex flex-column justify-content-center align-self-center">
        <h1 className='section-title align-self-center'>Track Progress</h1>
        <p className="align-self-center">
          Track the progress on your requests easily by viewing the status of the request.
          You can also reach out the relevant service provider for enquiries and complains
        </p>
      </div>
    </div>
  }

  footer = () => {
    return <Link
    linkClass='px-5 py-2 text-center border rounded text-white'
    href = '#'
    linkId='home-signup-btn-2'
    linkText='signup'
    onClick={this.handleSignupLink.bind(this)} />
  }

  render = () => {
    return (
      <div id='home-page' className='container-fluid'>
        <div className=''>
          <div className=''>
            <Div divId='home-description' divClass='' content={this.homeDescription()}/>
            <Div divId='make-requests' divClass='' content={this.makeRequest()}/>
            <Div divId='track-progress' divClass='' content={this.trackProgress()} />
            <Div divId='home-footer' divClass='d-flex justify-content-center' content={this.footer()} />
          </div>
        </div>
      </div>
    )
  }
}

export const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps)(Home);
