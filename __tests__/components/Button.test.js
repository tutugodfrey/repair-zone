import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

// Component to be tested
import Button from '../../client/src/components/Button';
describe('<Button />', () => {
  describe('render()', () => {
    test('renders the component', () => {
      const wrapper = shallow(<Button />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});