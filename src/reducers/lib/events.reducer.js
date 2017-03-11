/* @flow */
import { fromJS } from 'immutable';
import { FETCH_EVENTS_SUCCESS, FETCH_PHOTOS_SUCCESS } from '../../actions/types';
import type { Action } from '../../types';

export default function (state: Object = {}, action: Action) {
  switch (action.type) {
    case FETCH_EVENTS_SUCCESS:
      return fromJS(state).mergeDeep(fromJS(action.payload)).toJS();
    case FETCH_PHOTOS_SUCCESS:
      return fromJS(state).mergeDeep(fromJS(action.payload.events)).toJS();
    default:
      return state;
  }
}
