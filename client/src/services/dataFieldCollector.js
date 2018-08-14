import actions from '../../redux/actions';
import store from '../../redux/store';

const dataFieldCollector = (event) => {
  event.preventDefault();
  const name = event.target.name;
  const value = event.target.value;
  const state = store.getState().signupDetail;
  let signupDetail = {};
  if (!state) {
    signupDetail[name] = value;
    store.dispatch(actions.saveSignupDetails(signupDetail))
  } else {
    state[name] = value;
    store.dispatch(actions.saveSignupDetails(state))
  }
  console.log('state is', state)
  console.log(name, value)
  return {name, value}
}

export default dataFieldCollector;