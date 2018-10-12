import React from 'react';
import { Provider } from 'react-redux';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import ConnectedUpdateRequest, { UpdateRequest, mapStateToProps }
  from '../../client/src/components/UpdateRequest.jsx';

let unconnectedWrapper;
let connectedWrapper;
const requests = [{}, {}]
const requestToUpdate = {};
const serviceProviders = [];
const initialState = {
  requestReducer: {
    requests,
    requestToUpdate,
    serviceProviders,
  },
  pageReducer: {
    errorStatus: false,
    errorMessage: '',
  }
}
const mockStore = configureStore();
const store = mockStore(initialState);

describe('<UpdateRequest /> test', () => {
  describe('unconnected update request component', () => {
    beforeEach(() => {
      unconnectedWrapper = shallow(
      <UpdateRequest
        requests={requests}
        requestToUpdate={requestToUpdate}
        serviceProviders={serviceProviders}
      />);
    });
    test('should map the snapshot of the component', () => {
      expect(toJson(unconnectedWrapper)).toMatchSnapshot();
    });
  });
  describe('connected update request component', () => {
    beforeEach(() => {
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
      store.getState().requestReducer.requests = requests;
      const dispatch = jest.fn();
      connectedWrapper = mount(
        <Provider store={store}>
          <ConnectedUpdateRequest
            dispatch={dispatch}
            serviceProviders={serviceProviders}
          />
        </Provider>
      );
    });
    test('should render a div with class card', () => {
      const divContainer = connectedWrapper.find('.card');
      expect(divContainer.length).toBe(1);
    })
    test('should render with an update button', () => {
      const renderedBtns = connectedWrapper.find('button');
      expect(renderedBtns.length).toBe(2)
    });
  });
  describe('mapStateToProps', () => {
    test('should map the state of the component correctly', () => {
      const appState = {
        requestReducer: {
          requests: [{}, {}, {}],
          requestToUpdate: {},
          serviceProviders: [],
        },
        pageReducer: {
          errorMessage: '',
          errorStatus: true,
        }
      }
      const expectedState = {
        requests: [{}, {}, {}],
        requestToUpdate: {},
        serviceProviders: [],
      }
      const componentState = mapStateToProps(appState);
      expect(componentState).toEqual(expectedState)
    })
  })
});
