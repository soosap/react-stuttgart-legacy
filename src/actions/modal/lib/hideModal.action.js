/* @flow */
import { HIDE_MODAL } from '../../../actions/types';
import type { Action } from '../../../types';

export function hideModal(modalType: string): Action {
  return { type: HIDE_MODAL, payload: { modalType } };
}
