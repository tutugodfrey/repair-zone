import React from 'react';
import { Provider } from 'react-redux';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import ConnectedHeader, { Header, mapStateToProps }
  from '../../client/src/components/Header.jsx';
import realStore from '../../client/redux/store';


const mockStore = configureStore();

describe('<Header />', () => {
  describe('unconnected component test', () => {
    describe('admin dashboard', () => {
      let wrapper;
      const event = {
        preventDefault: jest.fn(),
        target: {
          id: 'make-request',
          className: 'inactive',
          nextSibling: {
            id: 'view-requests',
            className: 'active'
          }
        },
      }
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
      });
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
    const event = {
      preventDefault: jest.fn(),
      target: {
        id: 'make-request',
        className: 'inactive',
        nextSibling: {
          id: 'view-requests',
          className: 'active'
        }
      },
    }
    describe('admin page', () => {
      beforeEach(() => {
        const initialState = {
          userReducer: {
            userData: {
              isAdmin: true,
              imgUrl: 'path/to/profile/photo',
            },
          },
          pageReducer: {
            idOfActiveTab: 'view-requests',
          },
        };
        document.getElementById = jest.fn( (id) => {
          return {
            id: id,
            className: 'active',
            setAttribute: jest.fn((props, eleClass) => {
              return {
                className: eleClass
              }
            })
          }
        });
        const userData =  {
          isAdmin: true,
          imgUrl: 'path/to/profile/photo',
        }
        // store = mockStore(initialState);
        realStore.getState().userReducer.userData = userData;
        wrapper = mount(
          <Provider store={realStore}>
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
      });
      test('should open the Make Request tab onClick', () => {
        wrapper.find('#approved-requests').simulate('click');
        const { idOfActiveTab } = realStore.getState().pageReducer;
        expect(idOfActiveTab).toBe('approved-requests');
      });
      test('should open the Make Request tab onClick', () => {
        wrapper.find('#view-requests').simulate('click');
        const { idOfActiveTab } = realStore.getState().pageReducer;
        expect(idOfActiveTab).toBe('view-requests');
      });
      test('should open the Make Request tab onClick', () => {
        wrapper.find('#message').simulate('click');
        const { idOfActiveTab } = realStore.getState().pageReducer;
        expect(idOfActiveTab).toBe('message');
      });
      test('should open the Make Request tab onClick', () => {
        wrapper.find('#resolved-requests').simulate('click');
        const { idOfActiveTab } = realStore.getState().pageReducer;
        expect(idOfActiveTab).toBe('resolved-requests');
      });
    });

    describe('user page', () => {
      beforeEach(() => {
        const initialState = {
          userReducer: {
            userData: {
              isAdmin: false,
              imgUrl: 'path/to/profile/photo',
            },
          },
          pageReducer: {
            idOfActiveTab: 'view-requests',
          },
        };
        document.getElementById = jest.fn( (id) => {
          return {
            id: id,
            className: 'active',
            setAttribute: jest.fn((props, eleClass) => {
              return {
                className: eleClass
              }
            })
          }
        });

        const userData =  {
          isAdmin: false,
          imgUrl: 'path/to/profile/photo',
        }
        realStore.getState().userReducer.userData = userData;
        wrapper = mount(
          <Provider store={realStore}>
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
      });
      test('should open the Make Request tab onClick', () => {
        wrapper.find('#make-request').simulate('click');
        const { idOfActiveTab } = realStore.getState().pageReducer;
        expect(idOfActiveTab).toBe('make-request');
      });
      test('should open the Make Request tab onClick', () => {
        wrapper.find('#view-requests').simulate('click');
        const { idOfActiveTab } = realStore.getState().pageReducer;
        expect(idOfActiveTab).toBe('view-requests');
      });
      test('should open the Make Request tab onClick', () => {
        wrapper.find('#message').simulate('click');
        const { idOfActiveTab } = realStore.getState().pageReducer;
        expect(idOfActiveTab).toBe('message');
      });

      test('should open the Make Request tab onClick', () => {
        wrapper.find('.navbar-toggler').simulate('click');
        const { idOfActiveTab } = realStore.getState().pageReducer;
        expect(idOfActiveTab).toBe('message');
      });
      test('should open the Make Request tab onClick', () => {
        wrapper.find('#home-logo').simulate('click');
        const { idOfActiveTab } = realStore.getState().pageReducer;
        expect(idOfActiveTab).toBe('message');
      });
    });
  });

  describe('mapStateToProps', () => {
    test('map the state of the component correctly', () => {
      const appState = {
        userReducer: {
          userData: {},
        },
        pageReducer: {
          idOfActiveTab: 'view request',
        },
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
