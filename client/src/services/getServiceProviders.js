import store from '../../redux/store';
import actions from '../../redux/actions';
export const getServiceProviders = (data) => {
  store.dispatch(actions.saveServiceProviders(data));
  // console.log(data)
}