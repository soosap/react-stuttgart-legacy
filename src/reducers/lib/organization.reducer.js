/* @flow */
import { FETCH_ORGANIZATION_SUCCESS } from '../../actions/types';
import type { Action } from '../../types';

export default function (state: Object = {}, action: Action) {
  switch (action.type) {
    case FETCH_ORGANIZATION_SUCCESS:
      return state;
    default:
      return state;
  }
}
