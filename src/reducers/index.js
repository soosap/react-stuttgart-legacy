import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import auth from './auth.reducer';
import technologies from './technologies.reducer';

const rootReducer = combineReducers({
  auth,
  routing,
  technologies,
});

export default rootReducer;
