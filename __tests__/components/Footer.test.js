import React from 'react';
import { shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import Footer from '../../client/src/components/Footer.jsx';

describe('<Footer />', () => {
  const wrapper = shallow(
    <Footer />
  );
  test('should match the snapshot of the component', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
