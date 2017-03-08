import { FETCH_PHOTOS_REQUEST } from '../../../actions/types';

export function fetchEventPhotos(eventIds) {
  return { type: FETCH_PHOTOS_REQUEST, payload: { eventIds } };
}
