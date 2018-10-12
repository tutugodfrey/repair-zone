import actions from '../../redux/actions';
/* eslint-disable-next-line */
import store from '../../redux/store';

const dataFieldCollector = (event) => {
  const { name } = event.target;
  let { value } = event.target;
  if (event.target.type === 'file') {
    /* eslint-disable-next-line */
    value = event.target.files[0];
  }
  
  if(event.target.type === 'checkbox') {
    value = `${event.target.checked}`;
  }
  const state = store.getState().formDetailReducer;
  const { formType } = state;
  switch (formType) {
    case 'signup': {
      let { signupDetail } = state;
      if (!signupDetail) {
        signupDetail = {};
        signupDetail[name] = value;
        store.dispatch(actions.saveSignupDetails(signupDetail));
      } else {
        signupDetail[name] = value;
        store.dispatch(actions.saveSignupDetails(signupDetail));
      }
      break;
    }
    case 'signin': {
      let { signinDetail } = state;
      if (!signinDetail) {
        signinDetail = {};
        signinDetail[name] = value;
        store.dispatch(actions.saveSigninDetails(signinDetail));
      } else {
        signinDetail[name] = value;
        store.dispatch(actions.saveSigninDetails(signinDetail));
      }
      break;
    }
    case 'request-form': {
      let { requestDetail } = state;
      if (!requestDetail) {
        requestDetail = {};
        requestDetail[name] = value;
        store.dispatch(actions.saveRequestDetails(requestDetail));
      } else {
        requestDetail[name] = value;
        store.dispatch(actions.saveRequestDetails(requestDetail));
      }
      break;
    }
    case 'update-request-form': {
      let { requestDetail } = state;
      if (!requestDetail) {
        requestDetail = {};
        requestDetail[name] = value;
        store.dispatch(actions.saveRequestDetails(requestDetail));
      } else {
        requestDetail[name] = value;
        store.dispatch(actions.saveRequestDetails(requestDetail));
      }
      break;
    }
    default:
      return 'No form is set for submit';
  }
};

export default dataFieldCollector;
