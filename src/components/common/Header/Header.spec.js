import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';

import { Header } from './';

function renderHeader(props) {
  return shallow(<Header {...props} />).dive();
}

describe('<Header />', () => {
  it('should render a <div> tag', () => {
    const renderedComponent = renderHeader();
    expect(renderedComponent.type()).toEqual('div');
  });

  // it('sets active tab to "/home" when it first renders', () => {
  //   const wrapper = renderHeader();
  //   const homeTab = wrapper.find('Link').filterWhere(link => link.prop('to') === '/');
  //   expect(homeTab.hasClass('active')).toBeTruthy();
  // });
  //
  // it('switches active tab to "/about" upon click', () => {
  //   const wrapper = renderHeader();
  //   const aboutTab = wrapper.find('Link').filterWhere(link => link.prop('to') === 'about');
  //
  //   console.log('aboutTab: ', aboutTab.hasClass('active'));
  //
  //   expect(aboutTab.hasClass('active')).toNotExist();
  //
  //   aboutTab.simulate('click');
  //   const aboutTabClicked = wrapper.find('Link').filterWhere(link => link.prop('to') === 'about');
  //   expect(aboutTabClicked.hasClass('active')).toBeTruthy();
  // });
  //
  // it('displays a link to login/register when user is unauth\'ed');
  //
  // it('displays username and avatar when user is auth\'ed');
});
