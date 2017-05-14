/* @flow */
import { HIDE_MODAL } from '../types';
import type { Action } from '../../lib/types';

function hideModal(): Action {
  return { type: HIDE_MODAL };
}

export default hideModal;
