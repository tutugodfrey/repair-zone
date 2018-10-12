import { combineReducers } from 'redux';
import requestReducer from './requestReducer';
import userReducer from './userReducer';
import formDetailReducer from './formDetailReducer';
import pageReducer from './pageReducer';

const reducer = combineReducers({
  userReducer,
  requestReducer,
  formDetailReducer,
  pageReducer,
});

export default reducer;