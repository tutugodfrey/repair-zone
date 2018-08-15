import actions from '../../redux/actions';
import store from '../../redux/store';

const dataFieldCollector = (event) => {
  event.preventDefault();
  const name = event.target.name;
  const value = event.target.value;
  const state = store.getState();
  const formType = state.formType;
  switch(formType) {
    case 'signup': {
      const signupDetail = state.signupDetail;
      if (!signupDetail) {
        let signupDetail = {}
        signupDetail[name] = value;
        store.dispatch(actions.saveSignupDetails(signupDetail))
      } else {
        signupDetail[name] = value;
        store.dispatch(actions.saveSignupDetails(signupDetail))
      }
    };
    case 'signin': {
      const signinDetail = state.signinDetail;
      if (!signinDetail) {
        let signinDetail = {}
        signinDetail[name] = value;
        store.dispatch(actions.saveSigninDetails(signinDetail))
      } else {
        signinDetail[name] = value;
        store.dispatch(actions.saveSigninDetails(signinDetail))
      }
    }
 }
}

export default dataFieldCollector;
