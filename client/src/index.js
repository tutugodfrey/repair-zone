import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import bootstrap from 'bootstrap';
import store from './../redux/store';
import App from './components/App';
import main from './../styles/main.scss';


render(
<Provider store = {store} >
  <App store = {store}/>
</Provider>,
document.getElementById('index')
);