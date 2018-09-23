import fetchRequest from './fetchRequest';
import store from '../../redux/store';
import actions from '../../redux/actions';
import ViewRequest from '../components/ViewRequest.jsx';

const updateRequest = (event) => {
  event.preventDefault();
  const updateType = event.target.innerHTML;
  const buttonId = event.target.id;
  const buttonSubstring = buttonId.split('-');
  const requestId = buttonSubstring[1];
  const { userData, requests, requestDetail } = store.getState();
  const headers = new Headers();
  headers.append('content-type', 'application/json');
  headers.append('token', userData.token);
  const options = {
    headers,
    method: 'put',
  };

  const updateRequestStore = (updatedRequest, requests) => {
    const requestId = updatedRequest.request.id;
    let requestToUpdate;
    requestToUpdate =  requests.filter(request => {
      if (request.request.id === parseInt(requestId)) {
        return requestToUpdate = request;
      }
    });
    const indexOfRequest = requests.indexOf(requestToUpdate[0]);
    requests[indexOfRequest] = updatedRequest;
  }

  switch(updateType) {
    case 'Approve': {
      const updatedRequest = fetchRequest(`/requests/${requestId}/approve`, options);
      updatedRequest.then((updatedReq) => {
        updateRequestStore(updatedReq, requests);
      })
      store.dispatch(actions.setTabToView(ViewRequest));
      break;
    }
    case 'Reject': {
      const updatedRequest = fetchRequest(`/requests/${requestId}/disapprove`, options);
      updatedRequest.then((updatedReq) => {
        updateRequestStore(updatedReq, requests);
      })
      store.dispatch(actions.setTabToView(ViewRequest));
      break;
    }
    case 'Resolved': {
      const updatedRequest = fetchRequest(`/requests/${requestId}/resolve`, options);
      updatedRequest.then((updatedReq) => {
        updateRequestStore(updatedReq, requests);
      })
      store.dispatch(actions.setTabToView(ViewRequest));
      break;
    }
    case 'Save Update': {
      options.body = JSON.stringify(requestDetail);
      const updatedRequest = fetchRequest(`/users/requests/${requestId}`, options);
      updatedRequest.then(updatedReq => {
        updateRequestStore(updatedReq, requests);
      })
      store.dispatch(actions.setTabToView(ViewRequest));
      break;
    }
    case 'Delete': {
      options.method = 'delete'
      const updatedRequest = fetchRequest(`/users/requests/${requestId}`, options);
      updatedRequest.then((deleteMessage) => {
        const deletedRequest =  requests.filter(request => (request.request.id === parseInt(requestId)));
        const indexOfRequest = requests.indexOf(deletedRequest[0]);
        requests.splice(indexOfRequest, 1);
        store.dispatch(actions.setTabToView(ViewRequest));
      })
      break;
    }
    default: 
    return null
  }
}

export default updateRequest;
