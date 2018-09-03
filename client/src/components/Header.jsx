import React, { Component } from 'react';
import { NavButton } from './elementComponents/Button.jsx';
import Link from './elementComponents/Link.jsx';
import Home from './Home.jsx';
import ViewRequest from './ViewRequest.jsx';
import RequestForm from './RequestForm.jsx';
import SendMessage from './SendMessage.jsx';
import store from '../../redux/store';
import actions from '../../redux/actions';

export default class Header extends Component {
  changeTab(event, tabContent) {
    event.preventDefault()
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
            href="#"
            className="nav-link"
            linkText="View Request"
            onClick={(event) =>this.changeTab(event, ViewRequest)}
          />
        </li>
        <li className="nav-item m-1">
          <Link
            href="#"
            className="nav-link"
            linkText="Approved Request"
            onClick={(event) => this.changeTab(event, ViewRequest)}
          />
        </li>
        <li className="nav-item m-1">
          <Link
            href="#"
            className="nav-link"
            linkText="Resolved Request"
            onClick={(event) => this.changeTab(event, ViewRequest)}
          />
        </li>
        <li className="nav-item m-1">
          <Link
            href="#"
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
            href="#"
            className="nav-link"
            linkText="View Request"
            onClick={(event) =>this.changeTab(event, ViewRequest)}
          />
        </li>
        <li className="nav-item m-1">
          <Link
            href="#"
            className="nav-link"
            linkText="Make Request"
            onClick={(event) => this.changeTab(event, RequestForm)}
          />
        </li>
        <li className="nav-item m-1">
          <Link
            href="#"
            className="nav-link"
            linkText="Contact Messages"
            onClick={(event) => this.changeTab(event, SendMessage)}
          />
        </li>
      </ul>
    }
    return (
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
    )
  }
  render() {
    return this.headerContent()
  }
}