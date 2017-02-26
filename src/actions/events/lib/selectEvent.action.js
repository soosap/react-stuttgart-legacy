/* @flow */
import { SELECT_EVENT_SUCCESS } from '../../../actions/types';

export function selectEvent(event: string) {
  return { type: SELECT_EVENT_SUCCESS, payload: { event } };
}
