/* eslint-disable import/no-cycle */
import Home from '../src/components/Home.jsx';

const initialState = {
  home: Home,
};
// console.log(initialState.home)
const reducer = (state = initialState, action) => {
  switch (action.type) {
    // return default state if something isn't right
    case 'SET_USER_DATE':
      return Object.assign({}, state, {
        userData: action.value,
      });
    case 'SET_DISPLAY_PAGE':
      return Object.assign({}, state, {
        home: action.value,
      });
    default:
      return state;
  }
};

export default reducer;