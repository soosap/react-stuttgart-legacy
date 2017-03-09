/* @flow */
import { SELECT_EVENT_REQUEST } from '../../../actions/types';
import type { Action } from '../../../types';

export function selectEvent(eventId: string): Action {
  return { type: SELECT_EVENT_REQUEST, payload: { eventId } };
}
