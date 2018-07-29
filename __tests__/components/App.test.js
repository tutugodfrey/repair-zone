import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

// Component to be tested
import App from '../../client/src/containers/App';
describe('<App />', () => {
  describe('render()', () => {
    test('renders the component', () => {
      const wrapper = shallow(<App />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});