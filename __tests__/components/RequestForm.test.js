import React from 'react';
import { Provider } from 'react-redux';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import ConnectedRequestForm, { RequestForm, mapStateToProps }
  from '../../client/src/components/RequestForm.jsx';

const mockStore = configureStore();

describe('<RequestForm />', () => {
  describe('unconnected component test', () => {
    let wrapper;
    beforeEach(() => {
      const serviceProviders = [{}, {}];
      const dispatch = jest.fn();
      wrapper = shallow(
        <RequestForm
          serviceProviders={serviceProviders}
          dispatch={dispatch}
        />
      );
    });
    
    test('should match the snapshot of the component', () => {
      expect(toJson(wrapper)).toMatchSnapshot();
    })
  });
  describe('connected component test', () => {

  });
  describe('mapStateToProps', () => {
    test('map the state of the component correctly', () => {
      const appState = {
        requestReducer: {
          serviceProviders: [],
        },
        userReducer: {
          userData: {},
        },
        pageReducer: {
          idOfActiveTab: 'view request',
        },
        someRandomField: {},
      };
      const expectedState = {
        serviceProviders: [],
      };
      const componentState = mapStateToProps(appState);
      expect(componentState).toEqual(expectedState);
    });
  });
})