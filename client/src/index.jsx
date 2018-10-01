import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import bootstrap from 'bootstrap'; // eslint-disable-line no-unused-vars
import store from './../redux/store';
import App from './components/App.jsx';
import main from './../styles/main.scss'; // eslint-disable-line no-unused-vars

render(
  <Provider store={store} >
    <App store={store}/>
  </Provider>,
  document.getElementById('index')
);
