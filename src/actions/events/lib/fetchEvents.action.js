/* @flow */
import { FETCH_EVENTS_REQUEST } from '../../../actions/types';
import type { Action } from '../../../types';

export function fetchEvents(eventIds: Array<string>): Action {
  return { type: FETCH_EVENTS_REQUEST, payload: { eventIds } };
}
