/* eslint-disable import/no-cycle */

const initialState = {
  requests: [],
};

const requestReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SAVE_REQUESTS':
      return {
        ...state,
        requests: action.value,
      };
    
    // operation after a delete action
    case 'DELETE_REQUESTS':
      return {
        ...state,
        reducedRequests: action.value,
        requests: action.value,
      };
    case 'EMPTY_REDUCED_REQUEST_ARRAY':
      return {
        ...state,
        reducedRequests: [],
      };
    case 'SET_REQUEST_TO_UPDATE':
      return {
        ...state,
        requestToUpdate: action.value,
      };
    case 'SAVE_SERVICE_PROVIDERS':
      return {
        ...state,
        serviceProviders: action.value,
      };
    // return default state if something isn't right
    default:
      return state;
  }
};

export default requestReducer;
