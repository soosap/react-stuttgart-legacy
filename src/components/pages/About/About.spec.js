import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';

import { About } from './';

describe('<About />', () => {
  it('should render a <div> tag', () => {
    const spy = jest.fn();
    const renderedComponent = shallow(
      <About addTechnology={spy} stack={['React', 'GraphQL']} />
    );
    expect(renderedComponent.type()).toEqual('div');
  });
});
