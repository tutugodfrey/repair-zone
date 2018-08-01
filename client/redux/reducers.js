import Home from './../src/components/Home';
import React from 'react';
const initialState = {
  home: Home,
};
// console.log(initialState.home)
const reducer = (state = initialState, action) => {
  switch(action.type) {
    // return default state if something isn't right
    case 'SET_USER_DATE':
    return Object.assign({}, state, {
      userData: action.value
    })
    default:
    return state
  }
}
export default reducer;
