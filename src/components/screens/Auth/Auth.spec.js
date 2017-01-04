import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';

import { Auth } from './';

describe('<Auth />', () => {
  it('should render a <div> tag', () => {
    const renderedComponent = shallow(<Auth />);
    expect(renderedComponent.type()).toEqual('div');
  });
});
