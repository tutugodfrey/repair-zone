import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import ConnectResolvedRequest, { ResolvedRequests, mapStateToProps }
  from '../../client/src/components/ResolvedRequests.jsx';

let userData = {
  id: 2,
  fullname: 'fullname',
  isAdmin: true,
}
const initialState = {
  requestReducer: {},
  userReducer: {},
  pageReducer: {},
}
let mockStore = configureStore();
let store = mockStore(initialState);


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
          userData={userData}
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
          issueData: '2018-06-17T23:00:00.000Z',
          category: 'electrical',
          description: 'my wall socket got burnt and need replacement',
          address: 'provide for user making request',
          urgent: true,
          adminId: 2,
          status: 'Resolved',
          updatedAt: '2018-06-17T23:00:00.000Z'
        },
      }
    ];
    const userData = {
      id: 2,
      fullname: {},
      token: 'tokenvalue',
    }
    store.getState().requestReducer.requests = requests;
    store.getState().userReducer.userData = userData;
    beforeEach(() => {
      wrapper = mount(
        <Provider store={store}>
          <ConnectResolvedRequest />
        </Provider>
      );
    });
    test('should not have a button', () => {
      const btns = wrapper.find('button');
      expect(btns.length).toBe(1)
    })
  });
  describe('mapStateToProps', () => {
    test('should map the state of the component correctly', () => {
      const appState = {
        userReducer: {
          userData: {},
        },
        requestReducer: {
          requests: [],
        },
        pageReducer: {
          errorStatus: true,
          errorMessage: 'ssssss',
        },
      };
      const expectedState = {
        userData: {},
        requests: [], 
      };
      const componentState = mapStateToProps(appState);
      expect(componentState).toEqual(expectedState);
    });
  });
});
