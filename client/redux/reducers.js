/* eslint-disable import/no-cycle */
import Home from '../src/components/Home.jsx';
import ViewRequest from '../src/components/ViewRequest.jsx';

const initialState = {
  home: Home,
  TabContent: ViewRequest,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_DISPLAY_PAGE':
      return Object.assign({}, state, {
        home: action.value,
      });
    case 'SAVE_SIGNUP_DETAIL':
      return Object.assign({}, state, {
        signupDetail: action.value,
      });
    case 'SAVE_SIGNIN_DETAIL':
      return Object.assign({}, state, {
        signinDetail: action.value,
      });
    case 'SAVE_REQUEST_DETAIL':
      return Object.assign({}, state, {
        requestDetail: action.value,
      });
    case 'SET_FORM_TO_FILL':
      return Object.assign({}, state, {
        formType: action.value,
      });
    case 'SET_USER_DATA':
      return Object.assign({}, state, {
        userData: action.value,
      });
    case 'SET_TAB_TO_VIEW':
      return Object.assign({}, state, {
        TabContent: action.value,
      });
    case 'SAVE_REQUESTS':
      return Object.assign({}, state, {
        requests: action.value,
      });
    case 'SAVE_SERVICE_PROVIDERS':
      return Object.assign({}, state, {
        serviceProviders: action.value,
      })
    // return default state if something isn't right
    default:
      return state;
  }
};

export default reducer;
