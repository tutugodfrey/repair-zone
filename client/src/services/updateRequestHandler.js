import fetchRequest from './fetchRequest';
import store from '../../redux/store';

const updateRequest = (event) => {
  event.preventDefault();
  const updateType = event.target.innerHTML;
  const buttonId = event.target.id;
  const buttonSubstring = buttonId.split('-');
  const requestId = buttonSubstring[1];
  const { userData, requests } = store.getState();
  const headers = new Headers();
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
    })
    const indexOfRequest = requests.indexOf(requestToUpdate[0]);
    requests[indexOfRequest] = updatedRequest;
  }

  switch(updateType) {
    case 'Approve': {
      const updatedRequest = fetchRequest(`/requests/${requestId}/approve`, options);
      updatedRequest.then(updatedReq => {
        updateRequestStore(updatedReq, requests);
      })
      break;
    }
    case 'Reject': {
      const updatedRequest = fetchRequest(`/requests/${requestId}/disapprove`, options);
      updatedRequest.then(updatedReq => {
        updateRequestStore(updatedReq, requests);
      })
      break;
    }
    case 'Resolved': {
      const updatedRequest = fetchRequest(`/requests/${requestId}/resolve`, options);
      updatedRequest.then(updatedReq => {
        updateRequestStore(updatedReq, requests);
      })
      break;
    }
    default: 
    return null
  }
}

export default updateRequest;
