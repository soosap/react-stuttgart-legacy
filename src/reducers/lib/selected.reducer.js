/* @flow */
import R from 'ramda';
import { SELECT_EVENT_SUCCESS } from '../../actions/types';
import type { Action } from '../../types';

type State = {
  event: ?string,
  photo: ?number,
};

const initialState = {
  event: null,
  photo: null,
};

export default function (state: State = initialState, action: Action) {
  switch (action.type) {
    case SELECT_EVENT_SUCCESS:
      return R.merge(state, action.payload);
    default:
      return state;
  }
}
