/* @flow */
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import { reducer as form } from 'redux-form';
import events from './events.reducer';
import modal from './modal.reducer';
import photos from './photos.reducer';
import selected from './selected.reducer';
import speakers from './speakers.reducer';
import sponsors from './sponsors.reducer';
import talks from './talks.reducer';
import venues from './venues.reducer';

const rootReducer = combineReducers({
  events,
  form,
  modal,
  photos,
  router,
  selected,
  speakers,
  sponsors,
  talks,
  venues,
});

export default rootReducer;
