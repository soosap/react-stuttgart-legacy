/* @flow */
import R from 'ramda';
import { SELECT_EVENT_SUCCESS } from '../../actions/types';
import type { Action } from '../../types';

type State = {
  event?: string,
  photo?: number,
};

export default function (state: State = {}, action: Action) {
  switch (action.type) {
    case SELECT_EVENT_SUCCESS:
      return R.merge(state, { event: action.payload.eventId });
    default:
      return state;
  }
}
