import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import ConnectedSigninPage, { SigninPage, mapStateToProps }
  from '../../client/src/components/SigninPage.jsx';

let wrapper;
let mockStore = configureStore();
let store = mockStore();
describe('<SignupPage /> test', () => {
  describe('unconnected signup page', () => {
    beforeEach(() => {
      const dispatch = jest.fn();
      wrapper = shallow(
        <SigninPage
          dispatch={dispatch}
        />
      );
    });
    test('should map the snapshot of the component correctly', () => {
      expect(toJson(wrapper)).toMatchSnapshot();
    })
  });

  describe('connected signup page', () => {
    let wrapper;
    beforeEach(() => {
      const dispatch = jest.fn();
      wrapper = mount(
        <Provider store={store}>
          <ConnectedSigninPage
            dispatch={dispatch}
          />
        </Provider>
      );
    });
    test('should render the page with a signup button', () => {
      const signupBtn = wrapper.find('button');
      expect(signupBtn.length).toBe(2);
    });
    it('should call connected functions', () => {
    })
  });
});
