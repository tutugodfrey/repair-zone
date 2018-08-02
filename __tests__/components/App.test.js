import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

// Component to be tested
import App from '../../client/src/components/App';
import store from '../../client/redux/store';

describe('<App />', () => {
  describe('render()', () => {
    test('renders the component', () => {
      const wrapper = shallow(<App store={store} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});