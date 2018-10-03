import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../redux/actions';
import Div from './elementComponents/Div.jsx';
import Button from './elementComponents/Button.jsx';
import updateRequest from '../services/updateRequestHandler';
import { displayUpdateForm } from '../services/displayUserDashboard';
import Modal from './Modal.jsx';

export class ViewRequest extends Component {
  constructor() {
    super();
    this.state = {
      btnName: "view",
      requests: [],
    };
  }
  componentDidMount = () =>  {
    const { requests } = this.props;
    this.setState({
      requests,
    });
    if (requests.length === 0) {
      this.props.dispatch(actions.setErrorValue('Not request found'))
    } else {
      this.props.dispatch(actions.clearErrorValue())
    }
  }


  componentWillReceiveProps = (nextProps) => {
    const { reducedRequests } = nextProps;
    if (reducedRequests.length > 0) {
      this.setState({
        requests: reducedRequests,
      });
      this.props.dispatch(actions.emptyReducedRequestArray());
    }
  }

  handleView(event) {
    event.preventDefault();
    let element = event.target;
    const btnName = event.target.innerHTML;
    if(btnName === 'view') {
      event.target.innerHTML = 'close';
    } else {
      event.target.innerHTML = 'view';
    }
    element = element.parentNode;
    element = element.nextSibling
    const eleClass = element.getAttribute('class');
    let newClass;
    if(eleClass.indexOf('d-none') >= 0) {
      newClass = eleClass.replace('d-none', 'd-block')
      element.setAttribute('class', newClass);
    } else if (eleClass.indexOf('d-block') >= 0) {
      newClass = eleClass.replace('d-block', 'd-none')
      element.setAttribute('class', newClass);
    }
  }
  requestContainer(requestInfo) {
    let requestDetail;
    let displayedName = requestInfo.user.serviceName;
    let buttonId = `request-${requestInfo.request.id}`;
    let updateRequestBtn = 
      <Button
        buttonId={buttonId}
        buttonClass="update-request-button"
        buttonName="Update"
        onClick={displayUpdateForm.bind(this)}
      />
    let deleteRequestBtn = 
      <Button
        buttonId={buttonId}
        buttonClass="delete-request-button"
        buttonName="Delete"
        onClick={updateRequest.bind(this)}
      />
    let rejectRequestBtn = 
      <Button
        buttonId={buttonId}
        buttonClass="reject-request-button"
        buttonName="Reject"
        onClick={updateRequest.bind(this)}
      />
    let resolveRequestBtn = 
      <Button
        buttonId={buttonId}
        buttonClass="resolve-request-button"
        buttonName="Resolved"
        onClick={updateRequest.bind(this)}
      />
    let approveRequestBtn = 
      <Button
        buttonId={buttonId}
        buttonClass="approve-request-button"
        buttonName="Approve"
        onClick={updateRequest.bind(this)}
      />
    const { userData } = this.props;
    if(userData.isAdmin) {
      displayedName = requestInfo.user.fullname;
    }

    // offset button depending on the state of a request
    if (requestInfo.request.status === 'awaiting confirmation' && userData.isAdmin) {
      resolveRequestBtn = '';
    }
    if (requestInfo.request.status === 'resolved') {
      updateRequestBtn = '';
      rejectRequestBtn = '';
      approveRequestBtn = '';
      resolveRequestBtn = '';
    }
    if (requestInfo.request.status === 'pending') {
      updateRequestBtn = '';
      approveRequestBtn = '';
    }

    if (requestInfo.request.status === 'rejected') {
      resolveRequestBtn = '';
      rejectRequestBtn = '';
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
      if(property === 'id' ||
        property === 'adminId' ||
        property === 'userId' ||
        property === 'updatedAt'
      ) {
        return null;
      }
      let issueDate;
      let term = property.toUpperCase();
      const definition = requestInfo.request[property];
      if(property === 'issueDate') {
        const issueDataArr = definition.split('T');
        issueDate = issueDataArr[0];
      }
      if(property === 'urgent' && definition === false) {
        return null;
      }
      return (
        <div className="request-detail-div" key={property}>
            <dt className={`${property}-term`}>
              {term}
            </dt>
            <dd className={`${property}-def`}>
              {issueDate || definition}
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
        <div className="request-content d-none">
          <dl className="request-detail-dl">
            {requestDetail}
          </dl>
          {updateRequestBtn}
          {deleteRequestBtn}
          {approveRequestBtn}
          {rejectRequestBtn}
          {resolveRequestBtn}
        </div>
      </div>
    )
  }
  renderAllRequest(allRequests) {
    let viewAllRequest;
    if (allRequests) {
      viewAllRequest = allRequests.map(request => {
        return this.requestContainer(request);
      })
    }
    return viewAllRequest;
  }
  render() {
    const { requests } = this.state;
    return (
      <div>
        <Modal />
        <Div divClass="row py-5" content={this.renderAllRequest(requests)} />
      </div>
    )
  }
}

export const mapStateToProps = (state) => {
  const { userData, requests, reducedRequests } = state;
  return {
    userData,
    requests,
    reducedRequests,
  }
}
export default connect(mapStateToProps)(ViewRequest);
