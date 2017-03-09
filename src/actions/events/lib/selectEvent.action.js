/* @flow */
import { SELECT_EVENT_REQUEST } from '../../../actions/types';

export function selectEvent(eventId: string) {
  return { type: SELECT_EVENT_REQUEST, payload: { eventId } };
}
