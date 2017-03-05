import { FETCH_EVENTS_REQUEST } from '../../../actions/types';

export function fetchEvents(eventIds) {
  return { type: FETCH_EVENTS_REQUEST, payload: { eventIds } };
}
