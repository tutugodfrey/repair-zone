import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavButton } from './elementComponents/Button.jsx';
import Link from './elementComponents/Link.jsx';
import Home from './Home.jsx';
import ViewRequest from './ViewRequest.jsx';
import ApprovedRequests from './ApprovedRequests.jsx';
import ResolvedRequests from './ResolvedRequests.jsx';
import RequestForm from './RequestForm.jsx';
import SendMessage from './SendMessage.jsx';
import actions from '../../redux/actions';
import logoutHandler from '../services/logoutHandler';

export class Header extends Component {
  changeTab(event, tabContent) {
    event.preventDefault();
    const { id, className } = event.target;
    const { idOfActiveTab } = this.props;
    let elementClass = className.replace('inactive', 'active');
    elementClass = elementClass.replace('text-white', 'text-black');
    const previousEle = document.getElementById(idOfActiveTab);
    let prevElementTabClass = previousEle.className;
    prevElementTabClass = prevElementTabClass.replace('text-black', 'text-white');
    previousEle.setAttribute('class', prevElementTabClass)
    event.target.className = elementClass;
    this.props.dispatch(actions.setIdOfActiveTab(id));
    return this.props.dispatch(actions.setTabToView(tabContent));
  }

  handleHomeLink(event, self) {
    // event.preventDefault();
    // self.props.dispatch(actions.displayPage(Home))
  }

  headerContent() {
    const { userData } = this.props;
    const { isAdmin } = userData;
    let nanbarContent;
    if(isAdmin) {
      nanbarContent = <ul className="navbar-nav">
        <li className="nav-item m-1">
          <Link
            href="#view-requests"
            linkId="view-requests"
            linkClass="nav-link text-black py-1 border rounded"
            linkText="View Request"
            onClick={(event) =>this.changeTab(event, ViewRequest)}
          />
        </li>
        <li className="nav-item m-1">
          <Link
            href="#approved-request"
            linkId="approved-requests"
            linkClass="nav-link text-white py-1 border rounded"
            linkText="Approved Request"
            onClick={(event) => this.changeTab(event, ApprovedRequests)}
          />
        </li>
        <li className="nav-item m-1">
          <Link
            href="#resolved-request"
            linkId="resolved-requests"
            linkClass="nav-link text-white py-1 border rounded"
            linkText="Resolved Request"
            onClick={(event) => this.changeTab(event, ResolvedRequests)}
          />
        </li>
        <li className="nav-item m-1">
          <Link
            href="#contact-messages"
            linkId="message"
            linkClass="nav-link text-white py-1 border rounded"
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
            linkId="view-requests"
            linkClass="nav-link text-black py-1 border active rounded"
            linkText="View Request"
            onClick={(event) =>this.changeTab(event, ViewRequest)}
          />
        </li>
        <li className="nav-item m-1">
          <Link
            href="#make-request"
            linkId="make-request"
            linkClass="nav-link text-white py-1 border inactive rounded"
            linkText="Make Request"
            onClick={(event) => this.changeTab(event, RequestForm)}
          />
        </li>
        <li className="nav-item m-1">
          <Link
            href="#contact-messages"
            linkId="message"
            linkClass="nav-link text-white py-1 border inactive rounded"
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
          <a
          id="logout-link"
          href="#"
          className="ml-auto text-white py-1 px-2 border rounded"
          onClick={logoutHandler}
          >
          Logout
          </a>
          {/* <img src={`${apiUrl}${imgUrl}`} alt="profile pix" className="" /> */}
        </div>
        </div>
        <div className="row navbar navbar-expand-md navbar-light bg-success">
          <div id="logo-div3" className="col-4 px-0 col-md-2">
            <Link
              href="#"
              linkClass="logo text-white font-weight-bold"
              linkId="home-logo"
              onClick={(event) => this.handleHomeLink(event, this)}
              linkText="Repair-Zone"
            />
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

export const mapStateToProps = (state) => {
  const { userData } = state.userReducer;
  const { idOfActiveTab } = state.pageReducer;
  return {
    userData,
    idOfActiveTab,
  }
}

export default connect(mapStateToProps)(Header);
