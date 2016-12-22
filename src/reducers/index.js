import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import auth from './auth.reducer';
import tech from './tech.reducer';

const rootReducer = combineReducers({
  auth,
  routing,
  tech,
});

export default rootReducer;
