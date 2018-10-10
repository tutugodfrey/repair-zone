import actions from '../../redux/actions';
import store from '../../redux/store';
import SigninPage from '../components/SigninPage.jsx';

/**
 * clear user data from localStorage
 * and redirect user to the login
 * page when user click the signin page
 */
const logoutHandler = () => {
  if (localStorage.getItem('userData')) {
    localStorage.removeItem('userData');
    store.dispatch(actions.displayPage(SigninPage));
  }
}

export default logoutHandler;
