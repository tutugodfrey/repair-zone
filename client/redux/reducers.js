/* eslint-disable import/no-cycle */
import Home from '../src/components/Home.jsx';

const initialState = {
  home: Home,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER_DATE':
      return Object.assign({}, state, {
        userData: action.value,
      });
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
    case 'SET_FORM_TO_FILL':
      return Object.assign({}, state, {
        formType: action.value,
      });
    case 'SET_USER_DATA':
      return Object.assign({}, state, {
        userData: action.value,
      });

    // return default state if something isn't right
    default:
      return state;
  }
};

export default reducer;
