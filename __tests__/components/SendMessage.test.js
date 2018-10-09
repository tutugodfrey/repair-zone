import React from 'react';
import { shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import SendMessage from '../../client/src/components/SendMessage.jsx';

describe('SendMessage />', () => {
  const wrapper = shallow(
    <SendMessage />
  );
  test('should match the snapshot of the component', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
