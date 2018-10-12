import fetchRequest from '../services/fetchRequest';
import actions from '../../redux/actions';
import store from '../../redux/store';
import ViewRequest from '../components/ViewRequest.jsx';
import { validateRequiredField } from './formValidation';

const makeRequestHandler = async (event) => {
  event.preventDefault();
  const requiredField = ['category', 'description', 'address', 'urgent', 'adminId'];
  let allFieldPass = true;
  const { requestDetail } = store.getState().formDetailReducer;
  if (!requestDetail) {
    return store.dispatch(actions
      .setErrorValue('please fill all required fields to make your request'));
  }
  requiredField.forEach((key) => {
    const failingElement = document.getElementsByName(key)[0];
    // change the object of the event
    event.target = failingElement;
    if (key === 'urgent' && !requestDetail[key]) {
      requestDetail[key] = '';
    } else if (key === 'adminId' && requestDetail[key] === '0') {
      allFieldPass = false;
      store.dispatch(actions
        .setErrorValue('please select a service'));
      validateRequiredField(event);
    } else if (key === 'category' && requestDetail[key] === 'Select') {
      allFieldPass = false;
      store.dispatch(actions
        .setErrorValue('Please select a category'));
      validateRequiredField(event);
    } else if (!requestDetail[key]) {
      allFieldPass = false;
      store.dispatch(actions
        .setErrorValue('Please fill all required fields'));
      validateRequiredField(event);
    }
  });

  if (allFieldPass) {
    const { token } = store.getState().userReducer.userData;
    const headers = {};
    headers['content-type'] = 'application/json';
    headers['token'] = token;
    const options = {
      method: 'post',
      body: JSON.stringify(requestDetail),
      headers,
    };
    const responseData = await fetchRequest('/users/requests', options);
    if (responseData.message) {
      // redirect user to the signin page
      store.dispatch(actions.setErrorValue(responseData.message));
    } else if(responseData) {
      const { requests } = store.getState().requestReducer;
      requests.push(responseData)
      store.dispatch(actions.saveRequests(requests));
  
      // redirect users to their dashboard
      store.dispatch(actions.setTabToView(ViewRequest));
      store.dispatch(actions.saveRequestDetails({}));
    }
  }
}

export default makeRequestHandler;
