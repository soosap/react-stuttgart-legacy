import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';

import { Dashboard } from './';

describe('<Dashboard />', () => {
  it('should render a <div> tag', () => {
    const renderedComponent = shallow(<Dashboard />);
    expect(renderedComponent.type()).toEqual('div');
  });
});
