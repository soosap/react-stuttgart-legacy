import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';

import { Navigation } from './';

function renderNavigation(props) {
  return shallow(<Navigation {...props} />).dive();
}

describe('<Navigation />', () => {
  it('should render a <div> tag', () => {
    const renderedComponent = renderNavigation();
    expect(renderedComponent.type()).toEqual('div');
  });

  // it('sets active tab to "/home" when it first renders', () => {
  //   const wrapper = renderNavigation();
  //   const homeTab = wrapper.find('Link').filterWhere(link => link.prop('to') === '/');
  //   expect(homeTab.hasClass('active')).toBeTruthy();
  // });
  //
  // it('switches active tab to "/about" upon click', () => {
  //   const wrapper = renderNavigation();
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
