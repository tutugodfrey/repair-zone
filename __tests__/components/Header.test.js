import React from 'react';
import { Provider } from 'react-redux';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import ConnectedHeader, { Header, mapStateToProps }
  from '../../client/src/components/Header.jsx';

const mockStore = configureStore();
describe('<Header />', () => {
  describe('unconnected component test', () => {
    describe('admin dashboard', () => {
      let wrapper
      beforeEach(() => {
        const dispatch = jest.fn();
        const userData = {
          isAdmin: true,
          imgUrl: 'path/to/profile/photo',
        }
        wrapper = shallow(
        <Header
          dispatch={dispatch}
          userData={userData}
          idOfActiveTab={'view-requests'}
        />);
      });
      test('shoudld match the component snapshot for admin', () => {
        expect(toJson(wrapper)).toMatchSnapshot();
      })
    });
    describe('user dashboard', () => {
      let wrapper
      beforeEach(() => {
        const dispatch = jest.fn();
        const userData = {
          isAdmin: false,
          imgUrl: 'path/to/profile/photo',
        }
        wrapper = shallow(
        <Header
          dispatch={dispatch}
          userData={userData}
          idOfActiveTab={'view-requests'}
        />);
      });
      test('shoudld match the component snapshot for user', () => {
        expect(toJson(wrapper)).toMatchSnapshot();
      })
    })
  });

  describe('connected component test', () => {
    let wrapper;
    beforeEach(() => {
      const initialState = {
        userData: {
          isAdmin: false,
          imgUrl: 'path/to/profile/photo',
        }
      };
      const store = mockStore(initialState);
      wrapper = mount(
        <Provider store={store}>
          <ConnectedHeader
          />
        </Provider>
      );
    });
    test('should render with a div with #navbar-content', () => {
      const navbarContainer = wrapper.find('#navbar-content');
      expect(navbarContainer.length).toBe(1);
    });
    test('should render with a div with #navbar-content', () => {
      const navbarContainer = wrapper.instance();
    })
  });

  describe('mapStateToProps', () => {
    test('map the state of the component correctly', () => {
      const appState = {
        userData: {},
        idOfActiveTab: 'view request',
        someRandomField: {},
      };
      const expectedState = {
        userData: {},
        idOfActiveTab: 'view request',
      };
      const componentState = mapStateToProps(appState);
      expect(componentState).toEqual(expectedState);
    });
  });
});
