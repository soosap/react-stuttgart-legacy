import { FETCH_PHOTOS_REQUEST } from '../../../actions/types';

export function fetchPhotos(eventIds) {
  return { type: FETCH_PHOTOS_REQUEST, payload: { eventIds } };
}
