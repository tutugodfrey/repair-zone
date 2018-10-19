import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { InlineLogin } from '../../client/src/components/InlineLogin.jsx';

describe('<InlineLogin />', () => {
  describe('unconnected component test', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(
      <InlineLogin
        setFormToFill={jest.fn()}
      />
      );
    });
    test('should map the snapshot of the component', () => {
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
