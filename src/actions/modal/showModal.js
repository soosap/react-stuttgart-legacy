/* @flow */
import { SHOW_MODAL } from '../types';
import type { Action } from '../../lib/types';

function showModal(modalType: string, modalProps: Object): Action {
  return { type: SHOW_MODAL, payload: { modalType, modalProps } };
}

export default showModal;
