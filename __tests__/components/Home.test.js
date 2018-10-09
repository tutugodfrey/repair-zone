import React from 'react';
import { Provider } from 'react-redux';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import ConnectedHome, { Home, mapStateToProps }
  from '../../client/src/components/Home.jsx';

describe('<Home />', () => {
  describe('unconnected component test', () => {
    let wrapper;
    beforeEach(() => {
      const dispatch = jest.fn();
      localStorage.setItem('userData', 'userDate');
      wrapper = shallow(
        <Home
          dispatch={dispatch}
        />
      );
    });
    test('should map the snapshot of the component', () => {
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
  describe('connect component test', () => {
  })
  describe('map state to props', () => {
    const appState = {}
    const componentState = mapStateToProps(appState);
    expect(componentState).toEqual(appState)
  })
})
