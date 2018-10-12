/* eslint-disable import/no-cycle */
import Home from '../../src/components/Home.jsx';
import ViewRequest from '../../src/components/ViewRequest.jsx';

const initialState = {
  home: Home,
  TabContent: ViewRequest,
  errorMessage: '',
  errorStatus: false,
  idOfActiveTab: 'view-requests',
};

const pageReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_DISPLAY_PAGE':
      return {
        ...state, 
        home: action.value,
      };
    case 'SET_TAB_TO_VIEW':
      return {
        ...state,
        TabContent: action.value,
      };
    case 'SET_ERROR_VALUE': 
      return {
        ...state,
        errorMessage: action.value,
        errorStatus: true,
      };
    case 'CLEAR_ERROR_VALUE': 
      return {
        ...state,
        errorMessage: '',
        errorStatus: false,
      };

    case 'SET_ID_OF_ACTIVE_TAB':
      return {
        ...state,
        idOfActiveTab: action.value,
      }
    // return default state if something isn't right
    default:
      return state;
  }
};

export default pageReducer;
