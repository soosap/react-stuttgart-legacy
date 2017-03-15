/* @flow */
import R from 'ramda';
import { FETCH_TALKS_SUCCESS } from '../../actions/types';
import type { Action } from '../../types';

export default function (state: Object = {}, action: Action) {
  switch (action.type) {
    case FETCH_TALKS_SUCCESS:
      return R.merge(state, R.defaultTo({}, action.payload));
    default:
      return state;
  }
}
