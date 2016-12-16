import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import technologies from './technologies.reducer';

const rootReducer = combineReducers({
  technologies,
  routing,
});

export default rootReducer;
