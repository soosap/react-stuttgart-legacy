/* @flow */
import R from 'ramda';
import { FETCH_EVENTS_SUCCESS } from '../actions/types';
import type { Action } from '../lib/types';

export default function (state: Object = {}, action: Action) {
  switch (action.type) {
    case FETCH_EVENTS_SUCCESS:
      return R.merge(state, R.propOr({}, 'talks', action.payload));
    default:
      return state;
  }
}
