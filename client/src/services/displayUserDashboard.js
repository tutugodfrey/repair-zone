import Dashboard from '../components/Dashboard.jsx';
import store from '../../redux/store';
import actions from '../../redux/actions';
import fetchRequest from './fetchRequest';

const displayUserDashboard = async () => {
  if(localStorage.getItem('userData')) {
    let userData = localStorage.getItem('userData');
    userData = JSON.parse(userData)
    console.log(userData, 'userData')
    store.dispatch(actions.setUserData(userData));
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
    store.dispatch(actions.displayPage(Dashboard));
  }
}

export default displayUserDashboard