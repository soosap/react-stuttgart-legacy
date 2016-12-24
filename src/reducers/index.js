import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { reducer as form } from 'redux-form';
import auth from './auth.reducer';
import tech from './tech.reducer';

const rootReducer = combineReducers({
  auth,
  form,
  routing,
  tech,
});

export default rootReducer;
