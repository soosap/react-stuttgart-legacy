/* @flow */
import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';

import CheckList from '../components/common/CheckList';
import CheckListItem from '../components/common/CheckList/CheckListItem';

const stories = storiesOf('CheckList', module);
const mockItems = [
  {
    id: '001',
    text: 'Learn redux-saga',
    value: 'redux-saga',
  },
  {
    id: '002',
    text: 'Learn FlowType',
    value: 'flowtype',
  },
  {
    id: '003',
    text: 'Learn reselect',
    value: 'reselect',
  },
  {
    id: '004',
    text: 'Learn react-storybook',
    value: 'storybook',
  },
];

stories.add('neutral state', () => <CheckList items={mockItems} />);
