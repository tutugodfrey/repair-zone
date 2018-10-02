import fetchRequest from '../services/fetchRequest';
import actions from '../../redux/actions';
import store from '../../redux/store';
import Dashboard from '../components/Dashboard.jsx';

  const handleLogin = async (event) => {
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
    const userData = await fetchRequest('/auth/signin', options);
    if(userData.token) {
      // sign is successful
      store.dispatch(actions.setUserData(userData));

      // set user data in localStorage
      const userInfo = JSON.stringify(userData);
      localStorage.setItem('userData', userInfo);


      const headers = new Headers();
      headers.append('token', userData.token);
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
      return console.log(userData.message);
    }
  }
}

export default handleLogin;
