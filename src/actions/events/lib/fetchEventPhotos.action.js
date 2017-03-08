/* @flow */
import { FETCH_PHOTOS_REQUEST } from '../../../actions/types';

export function fetchEventPhotos(eventIds: Array<string>) {
  return { type: FETCH_PHOTOS_REQUEST, payload: { eventIds } };
}
