import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import actions from '../../redux/actions';
import Div from './elementComponents/Div.jsx';
import Button from './elementComponents/Button.jsx';
import updateRequest from '../services/updateRequestHandler';
import displayUpdateForm from '../services/displayUpdateForm';
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
    if (requests.length === 0) {
      this.props.setErrorValue('No request found');
    } else {
      this.props.clearErrorValue();
      this.setState({
        requests,
      });
    }
  }

  componentWillUpdate(nextProps, nextState) {
    const { requests } = nextProps
    if (nextProps.requests) {
      this.state.requests = requests;
    }
  }
  componentWillReceiveProps = (nextProps) => {
    const { reducedRequests } = nextProps;
    if (reducedRequests.length > 0) {
      this.setState({
        requests: reducedRequests,
      });
      this.props.emptyReducedRequestArray();
    }
  }

  handleView(event) {
    event.preventDefault();
    let element = event.target;
    let eventClass = event.target.className;
    const btnName = event.target.innerHTML;
    const parentDiv = element.parentNode;
    let parentDivClass = parentDiv.className;
    if (btnName === 'view') {
      event.target.innerHTML = 'close';
      eventClass = eventClass.replace('bg-success', 'bg-danger');
      element.setAttribute('class', eventClass);
      parentDivClass = parentDivClass.replace('bg-white', 'bg-success');
      parentDiv.setAttribute('class', parentDivClass);
    } else {
      event.target.innerHTML = 'view';
      eventClass = eventClass.replace('bg-danger', 'bg-success');
      element.setAttribute('class', eventClass);
      parentDivClass = parentDivClass.replace('bg-success', 'bg-white');
      parentDiv.setAttribute('class', parentDivClass);
    }
    element = element.parentNode;
    element = element.nextSibling
    const eleClass = element.getAttribute('class');
    let newClass;
    if (eleClass.indexOf('d-none') >= 0) {
      newClass = eleClass.replace('d-none', 'd-block');
      element.setAttribute('class', newClass);
    } else if (eleClass.indexOf('d-block') >= 0) {
      newClass = eleClass.replace('d-block', 'd-none');
      element.setAttribute('class', newClass);
    }
  }
  requestContainer(requestInfo) {
    let requestDetail;
    let displayedName = requestInfo.user.serviceName;
    let buttonId = `request-${requestInfo.request.id}`;
    const { userData } = this.props;
    let updateRequestBtn = 
      <Button
        buttonId={buttonId}
        buttonClass="update-request-button px-3 mr-2 rounded bg-success text-white"
        buttonName="Update"
        onClick={displayUpdateForm.bind(this)}
      />
    let deleteRequestBtn = 
      <Button
        buttonId={buttonId}
        buttonClass="delete-request-button px-3 mr-2  rounded bg-danger text-white"
        buttonName="Delete"
        onClick={updateRequest.bind(this)}
      />
    let rejectRequestBtn = 
      <Button
        buttonId={buttonId}
        buttonClass="reject-request-button px-3 mr-2  rounded bg-danger text-white"
        buttonName="Reject"
        onClick={updateRequest.bind(this)}
      />
    let resolveRequestBtn = 
      <Button
        buttonId={buttonId}
        buttonClass="resolve-request-button px-3 mr-2 rounded bg-success text-white"
        buttonName="Resolved"
        onClick={updateRequest.bind(this)}
      />
    let approveRequestBtn = 
      <Button
        buttonId={buttonId}
        buttonClass="approve-request-button px-3 mr-2 rounded bg-success text-white"
        buttonName="Approve"
        onClick={updateRequest.bind(this)}
      />

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
      if (property === 'id' ||
        property === 'adminId' ||
        property === 'userId' ||
        property === 'updatedAt'
      ) {
        return null;
      }
      let issueDate;
      let term = property.toUpperCase();
      const definition = requestInfo.request[property];
      if (property === 'issueDate') {
        const issueDataArr = definition.split('T');
        issueDate = issueDataArr[0];
      }
      if (property === 'urgent' && definition === false) {
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
      <div className="view-request-div col-10 offset-1 p-0 mb-1 bg-white col-md-6 offset-md-3" key={requestInfo.request.id}>
        <div className="request-header d-flex flex-row justify-content-between rounded border px-2 py-2 bg-white">
            <strong className="font-weight-bold">
              {displayedName}
            </strong>
            <Button buttonClass="view-btn rounded text-white bg-success"
              buttonName={this.state.btnName}
              onClick={this.handleView.bind(this)}
            />
        </div>
        <div className="request-content d-none p-3">
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
    const { userData } = this.props;
    if (allRequests) {
      if (userData.isAdmin) {
        viewAllRequest = [];
        allRequests.forEach(request => {
          if (request.request.status === 'awaiting confirmation' || request.request.status === 'rejected') {
            viewAllRequest.push(this.requestContainer(request));
          }
        })
        if (viewAllRequest.length === 0) {
          this.props.setErrorValue('No pending requests');
        }
        return viewAllRequest;
      }

      viewAllRequest = allRequests.map(request => {
        return this.requestContainer(request);
      });
      return viewAllRequest;
    }
  }
  render() {
    const { requests } = this.state;
    return (
      <div>
        <Modal />
        <div>
          <h1 className="text-center pt-5">List of Requests</h1>
          <Div divClass="row py-5" content={this.renderAllRequest(requests)} />
        </div>
      </div>
    )
  }
}

export const mapStateToProps = (state) => {
  const { requests, reducedRequests } = state.requestReducer;
  const { userData } = state.userReducer;
  return {
    userData,
    requests,
    reducedRequests,
  }
}
export const mapDispatchToProps = (dispatch) => {
  const {     emptyReducedRequestArray, clearErrorValue, setErrorValue } = actions
  return bindActionCreators({
    updateRequest,
    emptyReducedRequestArray,
    clearErrorValue,
    setErrorValue,
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(ViewRequest);
