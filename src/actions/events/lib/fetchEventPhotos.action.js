/* @flow */
import { FETCH_PHOTOS_REQUEST } from '../../../actions/types';
import type { Action } from '../../../types';

export function fetchEventPhotos(eventIds: Array<string>): Action {
  return { type: FETCH_PHOTOS_REQUEST, payload: { eventIds } };
}
