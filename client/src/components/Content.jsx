import React, { Component } from 'react';
import { connect } from 'react-redux';
import Div from './elementComponents/Div.jsx';
import store from '../../redux/store';

class Content extends Component {
  render() {
    const { TabContent } = this.props;
    return <Div divId="content-area" divClass="" content={<TabContent />} />
  }
}

export const mapStateToProps = (state) => {

  const { TabContent } = state;
  return {
    TabContent,
  }
}
export default connect(mapStateToProps)(Content);