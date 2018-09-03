import React, { Component } from 'react';
import Div from './elementComponents/Div.jsx';
import store from '../../redux/store';

export default class Content extends Component {
  render() {
    const { TabContent } = store.getState();
  return <Div divId="" divClass="" content={<TabContent />} />
  }
}