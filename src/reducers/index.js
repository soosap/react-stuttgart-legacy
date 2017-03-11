import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { reducer as form } from 'redux-form';
import events from './lib/events.reducer';
import venues from './lib/venues.reducer';
import organization from './lib/organization.reducer';
import photos from './lib/photos.reducer';
import selected from './lib/selected.reducer';
import modal from './lib/modal.reducer';

const rootReducer = combineReducers({
  events,
  form,
  modal,
  organization,
  photos,
  routing,
  selected,
  venues,
});

export default rootReducer;
