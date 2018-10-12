import React from 'react';
import { Provider } from 'react-redux';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import Content from '../../client/src/components/Content.jsx';

const mockStore = configureStore();
const initialState = {
  pageReducer: {},
}
const store = mockStore(initialState);

describe('<Content />', () => {
  const wrapper = shallow(
    <Content
      store={store}
    />
  );
  test('should match the snapshot of the component', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
