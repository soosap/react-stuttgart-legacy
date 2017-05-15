/* @flow */
import R from 'ramda';
import { createSelector } from 'reselect';

import getSelectedEvent from '../events/selectedEvent.selector';
import getPhotos from '../photos/photos.selector';
import type { Event, Photo } from '../../lib/types';

const deriveSelectedEventPhotos = (selectedEvent: Event, photos: Object): Array<Photo> => {
  if (!selectedEvent) return [];

  const eventPhotoIds = R.ifElse(R.isNil, R.always([]), R.identity)(selectedEvent.photos);
  const photoBelongsToSelectedEvent = R.contains(R.__, eventPhotoIds);
  return R.filter(R.propSatisfies(photoBelongsToSelectedEvent, 'id'), photos);
};

const selectedEventPhotosSelector = createSelector(
  getSelectedEvent,
  getPhotos,
  deriveSelectedEventPhotos,
);

export default selectedEventPhotosSelector;
