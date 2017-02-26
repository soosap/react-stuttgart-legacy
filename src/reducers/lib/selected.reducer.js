/* @flow */
import R from 'ramda';
import { SELECT_EVENT_SUCCESS } from '../../actions/types';

export type Action = {
  type: string,
  payload: Object,
};

type State = {
  event?: string,
  photo?: number,
};

export default function (state: State = {}, action: Action) {
  switch (action.type) {
    case SELECT_EVENT_SUCCESS:
      return R.merge(state, action.payload);
    default:
      return state;
  }
}
