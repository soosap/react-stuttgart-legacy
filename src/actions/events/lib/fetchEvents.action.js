import { FETCH_EVENTS_REQUEST } from '../../../actions/types';

export function fetchEvents(eventLinks) {
  return { type: FETCH_EVENTS_REQUEST, payload: { eventLinks } };
}
