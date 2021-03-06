/* @flow */
import R from 'ramda';
import { FETCH_PHOTOS_SUCCESS } from '../actions/types';
import type { Action } from '../lib/types';

export default function (state: Object = {}, action: Action) {
  switch (action.type) {
    case FETCH_PHOTOS_SUCCESS:
      return R.merge(state, R.propOr({}, 'photos', action.payload));
    default:
      return state;
  }
}
