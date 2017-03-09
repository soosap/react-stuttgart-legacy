/* @flow */
import { FETCH_EVENTS_REQUEST } from '../../../actions/types';

export function fetchEvents(eventIds: Array<string>) {
  return { type: FETCH_EVENTS_REQUEST, payload: { eventIds } };
}
