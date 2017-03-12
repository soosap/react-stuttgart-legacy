/* @flow */
import { HIDE_MODAL } from '../../../actions/types';
import type { Action } from '../../../types';

export function hideModal(): Action {
  return { type: HIDE_MODAL };
}
