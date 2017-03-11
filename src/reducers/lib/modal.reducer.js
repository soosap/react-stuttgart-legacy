/* @flow */
import R from 'ramda';
import { SHOW_MODAL, HIDE_MODAL } from '../../actions/types';
import type { Action } from '../../types';

const initialState = {
  modalType: null,
  modalProps: {},
};

export default function (state: Object = {}, action: Action) {
  switch (action.type) {
    case SHOW_MODAL:
      return action.payload;
    case HIDE_MODAL:
      return R.always(initialState);
    default:
      return state;
  }
}
