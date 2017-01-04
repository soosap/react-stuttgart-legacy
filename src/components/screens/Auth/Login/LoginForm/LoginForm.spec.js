import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';

import { LoginForm } from './';

describe('<LoginForm />', () => {
  it('should render a <form> tag', () => {
    const renderedComponent = shallow(<LoginForm />);
    expect(renderedComponent.type()).toEqual('form');
  });
});
