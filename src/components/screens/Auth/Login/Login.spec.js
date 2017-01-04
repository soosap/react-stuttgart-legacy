import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';

import { Login } from './';

describe('<Login />', () => {
  it('should render a <div> tag', () => {
    const renderedComponent = shallow(<Login />).dive();
    expect(renderedComponent.type()).toEqual('div');
  });
});
