import { FETCH_PHOTOS_REQUEST } from '../../../actions/types';

export function fetchPhotos(photoGalleryLinks) {
  return { type: FETCH_PHOTOS_REQUEST, payload: { photoGalleryLinks } };
}
