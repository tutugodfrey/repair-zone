import fetchRequest from '../services/fetchRequest';
import actions from '../../redux/actions';
import store from '../../redux/store';

function handleResponse(responseData) {
  if(responseData.token) {
    // sign is successful
    store.dispatch(actions.setUserData(responseData));

    // redirect users to their dashboard
    return console.log(responseData);
  }
  if (responseData.message === 'authentication fail! check your username or password') {
    // redirect user to the signin page
    return console.log(responseData.message);
  }
}

function handleLogin(event) {
  event.preventDefault();
  const requiredField = ['username', 'password'];
  let allFieldPass = true;
  const { signinDetail } = store.getState();
  if (!signinDetail) {
    return console.log('please enter your username and password');
  }
  requiredField.forEach((key) => {
    if (!signinDetail[key] || signinDetail[key].trim().length < 3) {
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
    headers.append('content-type', 'application/json');
    const options = {
      method: 'post',
      body: JSON.stringify(signinDetail),
      headers,
    };
    fetchRequest('/auth/signin', options, handleResponse);
  }
}

export default handleLogin;
