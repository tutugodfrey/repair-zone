import React, { Component } from 'react';
import Div from './elementComponents/Div.jsx';
import Button from './elementComponents/Button.jsx';
import store from './../../redux/store.js';
import fetchRequest from '../services/fetchRequest';

export default class ViewRequest extends Component {
  constructor() {
    super();
    this.state = {
      btnName: "view"
    };
  }
  componentDidMount = () =>  {
    const { requests } = store.getState();
    this.setState({
      allRequests: requests,
    });
  }
  handleView(event) {
    event.preventDefault();
    let parentNodeGotten = false;
    let element = event.target
    while(!parentNodeGotten) {
      element = element.parentNode;
      console.log(element)
      if(element.className.indexOf("view-request-div")) {
        parentNodeGotten = true;
      }
    }

    this.setState({
      btnName: 'close'
    });
  }
  requestContainer(requestInfo) {
    let requestDetail;
    let displayedName = requestInfo.user.serviceName;
    let updateRequestBtn = <Button buttonName="update request" />
    let deleteRequestBtn = <Button buttonName="delete request" />
    let rejectRequestBtn = <Button buttonName="Reject request" />
    let resolveRequestBtn = <Button buttonName="Mark as resolved" />
    let approveRequestBtn = <Button buttonName="Approve request" />
    const { userData } = store.getState();
    if(userData.isAdmin) {
      displayedName = requestInfo.user.fullname;
    }

    // offset button depending on the state of a request
    if (requestInfo.request.status === 'resolved') {
      updateRequestBtn = '';
      rejectRequestBtn = '';
      approveRequestBtn = '';
      resolveRequestBtn = '';
    }
    if (requestInfo.request.status === 'approved') {
      updateRequestBtn = '';
      approveRequestBtn = '';
    }

    if (requestInfo.request.status === 'disapprove') {
      resolveRequestBtn = '';
    }

    if (userData.isAdmin) {
      updateRequestBtn = '';
      deleteRequestBtn = '';
    }
    if (!userData.isAdmin) {
      rejectRequestBtn = '';
      resolveRequestBtn = '';
      approveRequestBtn = '';
    }
    const properties = Object.keys(requestInfo.request);
    requestDetail = properties.map((property) => {
      if(property === 'id' || property === 'adminId') {
        return null;
      }
      return (
        <div className="request-detail-div" key={property}>
            <dt className={`${property}-term`}>
              {property.toUpperCase()}
            </dt>
            <dd className={`${property}-def`}>
              {requestInfo.request[property]}
            </dd>
        </div>
      )
    })

    return (
      <div className="col-10 view-request-div offset-1 col-md-6 offset-md-3" key={requestInfo.request.id}>
        <div className="request-header">
          {displayedName}
          <Button buttonClass="view-btn justify-self-end"
            buttonName={this.state.btnName}
            onClick={this.handleView.bind(this)}
          />
        </div>
        <div className="request-content">
          <dl className="request-detail-dl">
            {requestDetail}
          </dl>
        </div>
        {updateRequestBtn}
        {deleteRequestBtn}
        {approveRequestBtn}
        {rejectRequestBtn}
        {resolveRequestBtn}
      </div>
    )
  }
  renderAllRequest(allRequests) {
    if(allRequests) {
      let viewAllRequest;
      viewAllRequest = allRequests.map(request => {
        return this.requestContainer(request);
      })
      return viewAllRequest;
    }
    return console.log('no request yet')
  }
  render() {
    return (
      <Div divClass="row" content={this.renderAllRequest(this.state.allRequests)} />
    )
  }
}
