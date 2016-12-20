import React from 'react';
import { shallow } from 'enzyme';

import Home from './';

describe('<Home />', () => {
  it('renders a <Link /> component pointing to the about page', () => {
    const wrapper = shallow(<Home />);
  });
})
