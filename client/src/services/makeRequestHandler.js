import fetchRequest from '../services/fetchRequest';
import actions from '../../redux/actions';
import store from '../../redux/store';
import ViewRequest from '../components/ViewRequest.jsx'

function handleResponse(responseData) {
  if(responseData.id) {
    // sign is successful
    store.dispatch(actions.saveRequest(responseData));

    // redirect users to their dashboard
    store.dispatch(actions.setTabToView(ViewRequest));
    store.dispatch(actions.saveRequestDetails({}))
    return console.log(responseData);
  }
  if (responseData.message) {
    // redirect user to the signin page
    return console.log(responseData.message);
  }
}

function makeRequestHandler(event) {
  event.preventDefault();
  const requiredField = ['category', 'description', 'address', 'urgent', 'adminId'];
  let allFieldPass = true;
  const { requestDetail } = store.getState();
  if (!requestDetail) {
    return console.log('please fill all required fields to make your request');
  }
  requiredField.forEach((key) => {
    if (key === 'urgent' && !requestDetail[key]) {
      requestDetail[key] = '';
    } else if (!requestDetail[key]) {
      allFieldPass = false;
      console.log(`please fill the ${key} field`);
    }
    return allFieldPass;
  });

  if (!allFieldPass) {
    return console.log('please fill all required field');
  }
  if (allFieldPass) {
    const headers = new Headers();
    const { token } = store.getState().userData;
    headers.append('content-type', 'application/json');
    headers.append('token', token);
    const options = {
      method: 'post',
      body: JSON.stringify(requestDetail),
      headers,
    };
    fetchRequest('/users/requests', options, handleResponse);
  }
}

export default makeRequestHandler;
