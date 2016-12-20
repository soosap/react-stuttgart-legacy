import React from 'react';
import { shallow } from 'enzyme';

import Header from './';

function renderHeader(props) {
  return shallow(<Header {...props} />)
}

describe('<Header />', () => {
  it('sets the active tab to "home" when it first renders', () => {
    const wrapper = renderHeader();
    const homeTab = wrapper.find('Link').filterWhere(link => link.prop('to') === '/');
    expect(homeTab.hasClass('active')).toBeTruthy();
  });

  it('switches the active tab upon click', () => {
    const wrapper = renderHeader();
    const aboutTab = wrapper.find('Link').filterWhere(link => link.prop('to') === 'about');
    expect(aboutTab.hasClass('active')).toBeFalsy();

    aboutTab.simulate('click');
    const aboutTabClicked = wrapper.find('Link').filterWhere(link => link.prop('to') === 'about');
    expect(aboutTabClicked.hasClass('active')).toBeTruthy();
  });

  it('displays a link to login/register when user is unauth\'ed');

  it('displays username and avatar when user is auth\'ed')
});
