import fetchRequest from '../services/fetchRequest';
import actions from '../../redux/actions';
import store from '../../redux/store';
import Dashboard from '../components/Dashboard.jsx';
import { validateRequiredField } from './formValidation';

const handleLogin = async (event) => {
  event.preventDefault();
  const requiredField = ['username', 'password'];
  let allFieldPass = true;
  const { signinDetail } = store.getState();
  if (!signinDetail) {
    return store.dispatch(actions
      .setErrorValue('please enter your username and password'))
  }
  requiredField.forEach((key) => {
    if (!signinDetail[key] || signinDetail[key].trim().length < 3) {
      const failingElement = document.getElementsByName(key)[0];
      allFieldPass = false;
      // change the object of the event
      event.target = failingElement,
      validateRequiredField(event);

    }
    return allFieldPass;
  });

  // if (!allFieldPass) {
  //   return store.dispatch(actions
  //     .setErrorValue('please fill all required field'));
  // }
  if (allFieldPass) {
    const headers = {};
    headers['content-type'] = 'application/json';
    const options = {
      method: 'post',
      body: JSON.stringify(signinDetail),
      headers,
    };

    const userData = await fetchRequest('/auth/signin', options);
    if(userData.token) {
      // sign is successful
      store.dispatch(actions.setUserData(userData));

      // set user data in localStorage
      const userInfo = JSON.stringify(userData);
      localStorage.setItem('userData', userInfo);


      const headers = {};
      headers.token = userData.token;
      const options = {
        method: 'get',
        headers,
      }
      if (userData.isAdmin) {
        const requests = await fetchRequest('/requests', options);
        store.dispatch(actions.saveRequests(requests));
      } else {
        const requests = await fetchRequest('/users/requests', options);
        store.dispatch(actions.saveRequests(requests));
      }
      // redirect users to their dashboard
      store.dispatch(actions.displayPage(Dashboard));
    }
    if (userData.message === 'authentication fail! check your username or password') {
      // redirect user to the signin page
      store.dispatch(actions
        .setErrorValue('authentication fail! check your username or password'));
    }
  }
}

export default handleLogin;
