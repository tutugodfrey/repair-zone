import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../redux/actions';
import Div from './elementComponents/Div.jsx';
import Button from './elementComponents/Button.jsx';
import updateRequest from '../services/updateRequestHandler';
import Modal from './Modal.jsx';

export class ApprovedRequests extends Component {
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
        buttonName="Resolve"
        onClick={updateRequest.bind(this)}
      />
    const { userData } = this.props;
    if(userData.isAdmin) {
      displayedName = requestInfo.user.fullname;
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
          {rejectRequestBtn}
          {resolveRequestBtn}
        </div>
      </div>
    )
  }
  renderAllRequest(allRequests) {
    let viewAllRequest = [];
    if (allRequests) {
      allRequests.forEach(request => {
        if (request.request.status === 'pending') {
          viewAllRequest.push(this.requestContainer(request));
        } 
      })
    }
    return viewAllRequest;
  }
  render() {
    const { requests } = this.state;
    return (
      <div>
        <Modal />
        <div>
          <h1 className="text-center pt-5">Approved Requests</h1>
          <Div divClass="row py-5" content={this.renderAllRequest(requests)} />
        </div>
      </div>
    );
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
export default connect(mapStateToProps)(ApprovedRequests);
