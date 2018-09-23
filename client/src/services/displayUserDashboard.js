import Dashboard from '../components/Dashboard.jsx';
import logoutHandler from './logoutHandler';
import store from '../../redux/store';
import actions from '../../redux/actions';
import fetchRequest from './fetchRequest';

const displayUserDashboard = async () => {
  if(localStorage.getItem('userData')) {
    let userData = localStorage.getItem('userData');
    userData = JSON.parse(userData)
    store.dispatch(actions.setUserData(userData));
    const headers = new Headers();
    headers.append('token', userData.token);
    const options = {
      method: 'get',
      headers,
    }
    if (userData.isAdmin) {
      const requests = await fetchRequest('/requests', options);
      if (requests.message === 'authentication fail! invalid token') {
        return logoutHandler();
      } else {
        store.dispatch(actions.saveRequests(requests));
      }
    } else {
      const requests = await fetchRequest('/users/requests', options);
      if (requests.message === 'authentication fail! invalid token') {
        return logoutHandler();
      } else {
        store.dispatch(actions.saveRequests(requests));
      }
    }
    store.dispatch(actions.displayPage(Dashboard));
  }
}

export default displayUserDashboard
