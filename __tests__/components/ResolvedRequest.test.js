import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import ConnectResolvedRequest, { ResolvedRequests, mapStateToProps }
  from '../../client/src/components/ResolvedRequests.jsx';

let wrapper;
let mockStore = configureStore();
let store = mockStore();

describe('<ResolvedRequest />', () => {
  describe('unconnected component test', () => {
    let wrapper;
    let requests = [
      {
        user: {
          fullname: 'fullname',
          isAdmin: false,
        },
        request: {
          id: 1,
          status: 'resolved',
        },
      }
    ];
    const dispatch = jest.fn();
    beforeEach(() => {
      wrapper = shallow(
        <ResolvedRequests
          requests={requests}
          reducedRequests={[]}
          userData={{}}
          dispatch={dispatch}
        />
      );
    });
    test('should map the snapshot for the component', () => {
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
  describe('connected component test', () => {
    let wrapper;
    let requests = [
      {
        user: {
          fullname: 'fullname',
          isAdmin: false,
        },
        request: {
          id: 1,
          status: 'resolved',
        },
      }
    ];
    const userData = {
      id: 2,
      fullname: {},
      token: 'tokenvalue',
    }
    store.getState().requests = requests;
    store.getState().userData = userData;
    store.getState().reducedRequests = [];
    beforeEach(() => {
      wrapper = mount(
        <Provider store={store}>
          <ConnectResolvedRequest />
        </Provider>
      );
    });
    test('should not have a button', () => {
      const btns = wrapper.find('button');
      expect(btns.length).toBe(2)
    })
  });
  describe('mapStateToProps', () => {
    test('should map the state of the component correctly', () => {
      const appState = {
        userData: {},
        reducedRequests: [],
        requests: [],
        errorStatus: true,
        errorMessage: 'ssssss'
      };
      const expectedState = {
        userData: {},
        reducedRequests: [],
        requests: [], 
      };
      const componentState = mapStateToProps(appState);
      expect(componentState).toEqual(expectedState);
    });
  });
});
