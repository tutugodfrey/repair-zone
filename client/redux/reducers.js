/* eslint-disable import/no-cycle */
import Home from '../src/components/Home.jsx';
import ViewRequest from '../src/components/ViewRequest.jsx';

const initialState = {
  home: Home,
  TabContent: ViewRequest,
  requests: [],
  errorMessage: '',
  error: false,
  formValidated: true,
  idOfActiveTab: 'view-requests',
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
    
    // operation after a delete action
    case 'DELETE_REQUESTS':
      return Object.assign({}, state, {
        reducedRequests: action.value,
        requests: action.value,
      });
    case 'EMPTY_REDUCED_REQUEST_ARRAY':
      return Object.assign({}, state, {
        reducedRequests: [],
      });
    case 'SET_REQUEST_TO_UPDATE':
      return Object.assign({}, state, {
        requestToUpdate: action.value,
      });
    case 'SAVE_SERVICE_PROVIDERS':
      return Object.assign({}, state, {
        serviceProviders: action.value,
      });
    case 'SET_ERROR_VALUE': 
      return Object.assign({}, state, {
        errorMessage: action.value,
        errorStatus: true,
      });
    case 'CLEAR_ERROR_VALUE': 
      return Object.assign({}, state, {
        errorMessage: '',
        errorStatus: false,
      });
    case 'CONFIRM_FORM_VALIDATION': 
      return Object.assign({}, state, {
        formValidated: action.value,
    });
    case 'SET_ID_OF_ACTIVE_TAB':
      return Object.assign({}, state, {
        idOfActiveTab: action.value,
      })
    // return default state if something isn't right
    default:
      return state;
  }
};

export default reducer;
