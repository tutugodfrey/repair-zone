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
  setRequestToUpdate: data => ({
    type: 'SET_REQUEST_TO_UPDATE',
    value: data,
  }),
  saveServiceProviders: data => ({
    type: 'SAVE_SERVICE_PROVIDERS',
    value: data,
  })
};

export default actions;
