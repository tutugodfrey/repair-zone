/* eslint-disable import/no-cycle */
import { createStore } from 'redux';
import reducer from './reducers/index';

const store = createStore(reducer);
export default store;
