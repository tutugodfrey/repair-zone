import React from 'react';
import { shallow, mount, render } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import ConnectedApp, { App, mapStateToProps } from '../../client/src/components/App.jsx';
import Home from '../../client/src/components/Home';
import { Provider } from 'react-redux';
const mockStore = configureStore();

const initialState = {
  pageReducer: {},
};
const store = mockStore(initialState);

describe('<App />', () => {
  describe('render()', () => {
    test('renders the component', () => {
      const home = '<div>string of html character</div>'
      const wrapper = shallow(<App store={store} home={home} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    test('renders the component', () => {
      const localStorage = {
        getItem: jest.fn(),
      };

      store.getState().pageReducer.home = Home;
      const wrapper = mount(
        <Provider store={store}>
          <ConnectedApp
          />
        </Provider>
      );
      const logo = wrapper.find('#home-logo');
      expect(logo.text()).toBe('Repair-Zone');
    });
  });

  test('mapStateToProps should map the component state correctly', () => {
    const appState = {
      pageReducer: {
        home: '<p>some html character</p>',
      }
    }
    const componentState = mapStateToProps(appState);
    expect(componentState.home).toEqual(appState.pageReducer.home)
  })
});