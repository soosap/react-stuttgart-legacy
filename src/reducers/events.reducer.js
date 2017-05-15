/* @flow */
import R from 'ramda';
import { fromJS } from 'immutable';
import { FETCH_EVENTS_SUCCESS, FETCH_PHOTOS_SUCCESS } from '../actions/types';
import type { Action } from '../lib/types';

export default function (state: Object = {}, action: Action) {
  switch (action.type) {
    case FETCH_EVENTS_SUCCESS:
    case FETCH_PHOTOS_SUCCESS:
      return fromJS(state).mergeDeep(fromJS(R.propOr({}, 'events', action.payload))).toJS();
    default:
      return state;
  }
}
