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
  })
};

export default actions;
