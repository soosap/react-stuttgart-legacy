import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { reducer as form } from 'redux-form';
import auth from './lib/auth.reducer';
import tech from './lib/tech.reducer';

const rootReducer = combineReducers({
  auth,
  form,
  routing,
  tech,
});

export default rootReducer;
