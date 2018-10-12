import React from 'react';
import { Provider } from 'react-redux';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import ConnectedViewRequest, { ViewRequest, mapStateToProps }
  from '../../client/src/components/ViewRequest.jsx';
const initialState = {
  requestReducer: {
    userData: {},
  },
  userReducer: {
    requests: [],
  },
  pageReducer: {
    errorMessage: '',
    error: false,
  }
}
const mockStore = configureStore();
const store = mockStore(initialState);
let shallowWrapper;
let connectedWrapper;
const userData = {
  isAdmin: true,
};
const user = {
  fullName: 'fullname',
  serviceName: 'servicename',
  isAdmin: true,
}
const requests = [
  {
    user,
    request: {
      id: 1,
      status: 'awaiting confirmation'
    }
  }
];
const dispatch = jest.fn();
  describe('ViewRequest Component test', () => {
    describe('Unconnected View request component', () => {
      beforeEach(() => {
        shallowWrapper = shallow(
          <ViewRequest
            userData={userData}
            reducedRequests={requests}
            requests={requests}
            dispatch={dispatch}
          />);
      });

      it('should correctly map the snapshot of the component', () => {
        expect(toJson(shallowWrapper)).toMatchSnapshot();
      });
    });

    describe('Connected ViewRequest component', () => {
      beforeEach(() => {
        store.getState().userReducer.userData = userData;
        store.getState().requestReducer.requests = requests;
        connectedWrapper = mount(
          <Provider store={store}>
            <ConnectedViewRequest
              userData={userData}
              reducedRequests={[requests]}
              requests={requests}
              dispatch={dispatch}
            />
          </Provider>);
      });
      test('should mount the component correctly', () => {
        const approveRequestBtn = connectedWrapper.find('#request-1');
        expect(approveRequestBtn.length).toBe(2);
      });
      test('when it receive an empty array', () => {
        store.getState().requestReducer.requests = [];
        connectedWrapper = mount(
          <Provider store={store}>
            <ConnectedViewRequest
              userData={userData}
              reducedRequests={[{}, {}, {}]}
              requests={requests}
              dispatch={dispatch}
            />
          </Provider>);
        const connectedWrapperInstance = connectedWrapper.instance();
      });
    });

    describe('mapStateToProps', () => {
      test('should map state to props correctly', () => {
        const appState = {
          requestReducer: { 
            requests: {},
            reducedRequests: {},
          },
          userReducer: {
            userData: {},
          }
        };
        const expectedState = {
            requests: {},
            reducedRequests: {},
            userData: {},
        };
        const componentState = mapStateToProps(appState);
        expect(componentState).toEqual(expectedState);
      });
    });
  });
