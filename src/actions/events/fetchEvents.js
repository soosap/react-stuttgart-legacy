/* @flow */
import { FETCH_EVENTS_REQUEST } from '../types';
import type { Action } from '../../lib/types';

function fetchEvents(eventIds: Array<string>): Action {
  return { type: FETCH_EVENTS_REQUEST, payload: { eventIds } };
}

export default fetchEvents;
