import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { reducer as form } from 'redux-form';
import events from './lib/events.reducer';
import modal from './lib/modal.reducer';
import photos from './lib/photos.reducer';
import selected from './lib/selected.reducer';
import speakers from './lib/speakers.reducer';
import sponsors from './lib/sponsors.reducer';
import talks from './lib/talks.reducer';
import venues from './lib/venues.reducer';

const rootReducer = combineReducers({
  events,
  form,
  modal,
  photos,
  routing,
  selected,
  speakers,
  sponsors,
  talks,
  venues,
});

export default rootReducer;
