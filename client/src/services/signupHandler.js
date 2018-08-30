/* eslint-disable-next-line */
import store from '../../redux/store';
import actions from '../../redux/actions';
import fetchRequest from './fetchRequest';
/* eslint-disable no-console */
function handleResponse(data) {
  // singup is successful if token is present
  if (data.token) {
    store.dispatch(actions.setUserData(data));
    // redirect user to their dashboard
  }

  // show console modal of the error message
  return console.log(data.message);
}

// get signup data from redux store
// make api request
function handleSignup(event) {
  event.preventDefault();
  const { signupDetail } = store.getState();
  if (!signupDetail) {
    return console.log('Please fill out all required field to signup');
  }
  const requestField = [
    'fullname', 'username', 'email', 'address',
    'password', 'confirmPassword', 'profile-photo',
    'phone', 'isAdmin', 'serviceName'];
  const keys = Object.keys(signupDetail);
  let allFieldPass = true;
  const emailRegExp = /\w+@\w+\.(com|org|net|co)/i;
  /* eslint-disable no-undef */
  const formData = new FormData();
  requestField.forEach((key) => {
    if(key === 'profile-photo') {
      formData.append(key, signupDetail[key]);
    } else if (keys.indexOf(key) >= 0 && signupDetail[key].trim().length > 3) {
      // the field is filled out
      formData.append(key, signupDetail[key]);
    } else if (key === 'profile-photo' || key === 'isAdmin' || key === 'serviceName') {
      formData.append(key, '');
    } else {
      allFieldPass = false;
    }
  });

  if (!allFieldPass) {
    return console.log('Please fill all required fields to create your account');
  }
  if (signupDetail.password !== signupDetail.confirmPassword) {
    return console.log('password you enter does not match');
  }
  if (!emailRegExp.test(signupDetail.email)) {
    return console.log('Please enter a valid email in email field');
  }

  if (signupDetail.isAdmin
    && (!signupDetail.serviceName
    || signupDetail.serviceName.trim().length < 3)) {
    return console.log('please enter a service name ');
  }
  const options = {
    body: formData,
    method: 'post',
  };
  return fetchRequest('/auth/signup',
    options,
    handleResponse);
}

export default handleSignup;
