/* @flow */
import { FETCH_PHOTOS_REQUEST } from '../types';
import type { Action } from '../../lib/types';

function fetchEventPhotos(eventIds: Array<string>): Action {
  return { type: FETCH_PHOTOS_REQUEST, payload: { eventIds } };
}

export default fetchEventPhotos;
