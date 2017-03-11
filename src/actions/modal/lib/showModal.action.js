/* @flow */
import { SHOW_MODAL } from '../../../actions/types';
import type { Action } from '../../../types';

export function showModal(modalType: string, modalProps: Object): Action {
  return { type: SHOW_MODAL, payload: { modalType, modalProps } };
}
