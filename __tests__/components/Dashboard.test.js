import React from 'react';
import { shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import Dashboard from '../../client/src/components/Dashboard.jsx';

describe('<Dashboard />', () => {
  const wrapper = shallow(
    <Dashboard />
  );
  test('should match the snapshot of the component', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
