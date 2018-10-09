const actions = {
  setUserData: data => ({
    type: 'SET_USER_DATA',
    value: data,
  }),
  displayPage: data => ({
    type: 'SET_DISPLAY_PAGE',
    value: data,
  }),
  saveSignupDetails: data => ({
    type: 'SAVE_SIGNUP_DETAIL',
    value: data,
  }),
  saveSigninDetails: data => ({
    type: 'SAVE_SIGNIN_DETAIL',
    value: data,
  }),
  saveRequestDetails: data => ({
    type: 'SAVE_REQUEST_DETAIL',
    value: data,
  }),
  setFormToFill: data => ({
    type: 'SET_FORM_TO_FILL',
    value: data,
  }),
  setTabToView: data => ({
    type: 'SET_TAB_TO_VIEW',
    value: data,
  }),
  saveRequests: data => ({
    type: 'SAVE_REQUESTS',
    value: data,
  }),
  deleteRequests: data => ({
    type: 'DELETE_REQUESTS',
    value: data,
  }),
  emptyReducedRequestArray: () => ({
    type: 'EMPTY_REDUCED_REQUEST_ARRAY',
  }),
  setRequestToUpdate: data => ({
    type: 'SET_REQUEST_TO_UPDATE',
    value: data,
  }),
  saveServiceProviders: data => ({
    type: 'SAVE_SERVICE_PROVIDERS',
    value: data,
  }),
  setErrorValue: data => ({
    type: 'SET_ERROR_VALUE',
    value: data,
  }),
  clearErrorValue: () => ({
    type: 'CLEAR_ERROR_VALUE',
  }),
  confirmFormValidation: status => ({
    type: 'CONFIRM_FORM_VALIDATION',
    value: status,
  }),
  setIdOfActiveTab: elementId => ({
    type: 'SET_ID_OF_ACTIVE_TAB',
    value: elementId,
  }),
};

export default actions;
