import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';

import { RegisterForm } from './';

describe('<RegisterForm />', () => {
  it('should render a <form> tag', () => {
    const renderedComponent = shallow(<RegisterForm />);
    expect(renderedComponent.type()).toEqual('form');
  });
});
