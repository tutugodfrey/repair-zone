import React, { Component } from 'react';
import { NavButton } from './elementComponents/Button.jsx';
import Link from './elementComponents/Link.jsx';
import Home from './Home.jsx';
import ViewRequest from './ViewRequest.jsx';
import RequestForm from './RequestForm.jsx';
import SendMessage from './SendMessage.jsx';
import store from '../../redux/store';
import actions from '../../redux/actions';
import fetchRequest from '../services/fetchRequest';
import logoutHandler from '../services/logoutHandler';

export default class Header extends Component {
  handleResponse(responseData) {
    store.dispatch(actions.saveRequests(responseData));
  }
  changeTab(event, tabContent) {
    event.preventDefault()
    let { href } = event.target;
    const hrefValueArray = href.split('#');
    href = hrefValueArray[1];
    let relativeUrl;
    let method;
    if(href === 'view-request') {
      relativeUrl = '/requests';
      method = 'get';
    } else if (href === 'view-user-request') {
      relativeUrl = '/users/requests';
      method = 'get';
    } else if (href === 'make-request') {
     // relativeUrl = '/auth/services';
    } else if (href === 'approved-request') {
      relativeUrl = '/requests/approved';
      method = 'get';
    } else if (href === 'resolved-request') {
      relativeUrl = '/requests/resolved';
      method = 'get';
    }
    const { userData } = store.getState();
    const headers = new Headers();
    headers.append('token', userData.token)
    const options = {
      method,
      headers,
    }
    fetchRequest(relativeUrl, options, this.handleResponse);
    store.dispatch(actions.setTabToView(tabContent));
  }

  handleHomeLink() {
    event.preventDefault();
    store.dispatch(actions.displayPage(Home))
  }

  headerContent() {
    const { isAdmin } = store.getState().userData;
    let nanbarContent;
    if(isAdmin) {
      nanbarContent = <ul className="navbar-nav">
        <li className="nav-item m-1">
          <Link
            href="#view-request"
            className="nav-link"
            linkText="View Request"
            onClick={(event) =>this.changeTab(event, ViewRequest)}
          />
        </li>
        <li className="nav-item m-1">
          <Link
            href="#approved-request"
            className="nav-link"
            linkText="Approved Request"
            onClick={(event) => this.changeTab(event, ViewRequest)}
          />
        </li>
        <li className="nav-item m-1">
          <Link
            href="#resolved-request"
            className="nav-link"
            linkText="Resolved Request"
            onClick={(event) => this.changeTab(event, ViewRequest)}
          />
        </li>
        <li className="nav-item m-1">
          <Link
            href="#contact-messages"
            className="nav-link"
            linkText="Contact Messages"
            onClick={(event) => this.changeTab(event, SendMessage)}
          />
        </li>
      </ul>
    } else {
      nanbarContent = <ul className="navbar-nav">
        <li className="nav-item m-1">
          <Link
            href="#view-user-request"
            className="nav-link"
            linkText="View Request"
            onClick={(event) =>this.changeTab(event, ViewRequest)}
          />
        </li>
        <li className="nav-item m-1">
          <Link
            href="#make-request"
            className="nav-link"
            linkText="Make Request"
            onClick={(event) => this.changeTab(event, RequestForm)}
          />
        </li>
        <li className="nav-item m-1">
          <Link
            href="#contact-messages"
            className="nav-link"
            linkText="Contact Messages"
            onClick={(event) => this.changeTab(event, SendMessage)}
          />
        </li>
      </ul>
    }
    return (
      <div>
        <div id="top-level-header" className="bg-success row">
        <div className="col-5 offset-6 col-sm-4 offset-sm-8 col-md-3 offset-md-9">
          <a id="logout-link" href="#" className="ml-auto bg-white py-1 px-2" onClick={logoutHandler}>logout</a>
        </div>
        </div>
        <div className="row navbar navbar-expand-md navbar-light bg-success">
          <div className="col-3 col-md-2">
            <Link href="#" linkClass="logo" linkId="home-logo" onClick={this.handleHomeLink} linkText="Repair-Zone"/>
          </div>
          <NavButton
            buttonClass="navbar-toggler ml-auto"
            data-toggle="collapse"
            data-target="#navbar-content"
            aria-controls="narbar-content"
            aria-label="Toggle-navigation"
            buttonId=""
            buttonName={<span className="navbar-toggler-icon"></span>}
          />
          <div className="col-9 collapse navbar-collapse" id="navbar-content">
            {nanbarContent}
          </div>
        </div>
      </div>
    )
  }
  render() {
    return this.headerContent()
  }
}