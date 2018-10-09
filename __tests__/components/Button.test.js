import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

// Component to be tested
import Button, { NavButton } from '../../client/src/components/elementComponents/Button';
describe('button test', () => {
  test('<Button /> should renders without error', () => {
    const onClick = jest.fn();
    const wrapper = shallow(<Button onClick={onClick} buttonClass="class value" buttonName="name" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  test('<NavButton /> should render without error', () => {
    const wrapper = shallow(
      <NavButton
        buttonName="name"
        buttonId="unique"
        buttonClass="class value"
      />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
