/* eslint-disable import/no-cycle */

const initialState = {
  userData: {},
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER_DATA':
      return {
        ...state,
        userData: action.value,
      };
    // return default state if something isn't right
    default:
      return state;
  }
};

export default userReducer;
