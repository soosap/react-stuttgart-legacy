/* @flow */
import R from 'ramda';
import { FETCH_PHOTOS_SUCCESS } from '../../actions/types';
import type { Action } from '../../types';

export default function (state: Object = {}, action: Action) {
  switch (action.type) {
    case FETCH_PHOTOS_SUCCESS:
      return R.merge(state, action.payload.photos);
    default:
      return state;
  }
}
