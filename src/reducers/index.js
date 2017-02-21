import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { reducer as form } from 'redux-form';
import auth from './lib/auth.reducer';
import events from './lib/events.reducer';
import venues from './lib/venues.reducer';
import organization from './lib/organization.reducer';
import photos from './lib/photos.reducer';

const rootReducer = combineReducers({
  auth,
  events,
  form,
  organization,
  photos,
  routing,
  venues,
});

export default rootReducer;
