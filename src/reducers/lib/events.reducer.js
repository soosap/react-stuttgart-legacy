import Immutable from 'immutable';
import { FETCH_EVENTS_SUCCESS, FETCH_PHOTOS_SUCCESS } from '../../actions/types';

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_EVENTS_SUCCESS:
      return Immutable.fromJS(state).mergeDeep(Immutable.fromJS(action.payload)).toJS();
    case FETCH_PHOTOS_SUCCESS:
      return Immutable.fromJS(state).mergeDeep(Immutable.fromJS(action.payload.events)).toJS();
    default:
      return state;
  }
}
