import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

// Component to be tested
import Div from '../../client/src/components/elementComponents/Div';
describe('<Div />', () => {
  describe('render()', () => {
    test('renders the component', () => {
      const wrapper = shallow(<Div />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});