import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import ConnectSignupPage, { SignupPage, mapStateToProps }
  from '../../client/src/components/SignupPage.jsx';

let wrapper;
let mockStore = configureStore();
const initialState = {
  pageReducer: {},
};
let store = mockStore(initialState);
describe('<SignupPage /> test', () => {
  describe('unconnected signup page', () => {
    beforeEach(() => {
      const dispatch = jest.fn();
      wrapper = shallow(
        <SignupPage
        setFormToFill={jest.fn()}
        displayPage={jest.fn()}
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
          <SignupPage
            setFormToFill={jest.fn()}
            displayPage={jest.fn()}
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
