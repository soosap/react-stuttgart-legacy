import React from 'react';
import { shallow, mount } from 'enzyme';
import expect from 'expect';

import { Register } from './';

describe('<Register />', () => {
  it('should render a <div> tag', () => {
    const renderedComponent = shallow(<Register />).dive();
    expect(renderedComponent.type()).toEqual('div');
  });
});
