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
  setFormToFill: data => ({
    type: 'SET_FORM_TO_FILL',
    value: data,
  }),
  setUserData: data => ({
    type: 'SET_USER_DATA',
    value: data,
  }),
};

export default actions;
