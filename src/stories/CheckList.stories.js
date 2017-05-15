/* @flow */
import React from 'react';
import { storiesOf } from '@kadira/storybook';

import CheckList from '../components/common/CheckList';

const stories = storiesOf('CheckList', module);
const mockItems = [
  {
    id: '001',
    text: 'Learn redux-saga',
    value: 'redux-saga1',
  },
  {
    id: '002',
    text: 'Learn FlowType',
    value: 'flowtype2',
  },
  {
    id: '003',
    text: 'Learn reselect',
    value: 'reselect3',
  },
  {
    id: '004',
    text: 'Learn react-storybook',
    value: 'storybook4',
  },
  {
    id: '005',
    text: 'Learn redux-saga',
    value: 'redux-saga5',
  },
  {
    id: '006',
    text: 'Learn FlowType',
    value: 'flowtype6',
  },
  {
    id: '007',
    text: 'Learn reselect',
    value: 'reselect7',
  },
  {
    id: '008',
    text: 'Learn react-storybook',
    value: 'storybook8',
  },
  {
    id: '009',
    text: 'Learn redux-saga',
    value: 'redux-saga9',
  },
  {
    id: '010',
    text: 'Learn FlowType',
    value: 'flowtype10',
  },
  {
    id: '011',
    text: 'Learn reselect',
    value: 'reselect11',
  },
  {
    id: '012',
    text: 'Learn react-storybook',
    value: 'storybook12',
  },
  {
    id: '013',
    text: 'Learn redux-saga',
    value: 'redux-saga13',
  },
  {
    id: '014',
    text: 'Learn FlowType',
    value: 'flowtype14',
  },
  {
    id: '015',
    text: 'Learn reselect',
    value: 'reselect15',
  },
  {
    id: '016',
    text: 'Learn react-storybook',
    value: 'storybook16',
  },
  {
    id: '017',
    text: 'Learn redux-saga',
    value: 'redux-saga17',
  },
  {
    id: '018',
    text: 'Learn FlowType',
    value: 'flowtype18',
  },
  {
    id: '019',
    text: 'Learn reselect',
    value: 'reselect19',
  },
  {
    id: '020',
    text: 'Learn react-storybook',
    value: 'storybook20',
  },
];

stories.add('neutral state', () => <CheckList items={mockItems} />);
