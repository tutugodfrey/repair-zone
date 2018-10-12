/* eslint-disable import/no-cycle */
import Home from '../../src/components/Home.jsx';
import ViewRequest from '../../src/components/ViewRequest.jsx';

const initialState = {
  home: Home,
  TabContent: ViewRequest,
  requests: [],
  errorMessage: '',
  errorStatus: false,
  formValidated: true,
};

const formDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SAVE_SIGNUP_DETAIL':
      return {
        ...state,
        signupDetail: action.value,
      };
    case 'SAVE_SIGNIN_DETAIL':
      return {
        ...state,
        signinDetail: action.value,
      };
    case 'SAVE_REQUEST_DETAIL':
      return {
        ...state,
        requestDetail: action.value,
      };
    case 'SET_FORM_TO_FILL':
      return {
        ...state,
        formType: action.value,
      };
      case 'CONFIRM_FORM_VALIDATION': 
      return {
        ...state,
        formValidated: action.value,
      };
    // return default state if something isn't right
    default:
      return state;
  }
};

export default formDetailReducer;
