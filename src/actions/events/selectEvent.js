/* @flow */
import { SELECT_EVENT_REQUEST } from '../types';
import type { Action } from '../../lib/types';

function selectEvent(eventId: string): Action {
  return { type: SELECT_EVENT_REQUEST, payload: { event: eventId } };
}

export default selectEvent;
