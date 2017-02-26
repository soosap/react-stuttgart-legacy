/* @flow */
import R from 'ramda';
import { createSelector } from 'reselect';
import type { Event, Photo } from '../../../types';

const eventsSelector = state => state.events;
const selectedSelector = state => state.selected;
const photosSelector = state => state.photos;

const retrieveSelectedEvent = (events: Object, selected: Object): ?Event => {
  if (selected.event) return events[selected.event];
};

const selectedEventSelector: Event = createSelector(
  eventsSelector,
  selectedSelector,
  retrieveSelectedEvent,
);

const retrieveEventPhotos = (selectedEvent: ?Event, photos: Object): Array<Photo> => {
  if (!selectedEvent) return [];

  const photoBelongsToSelectedEvent = R.contains(R.__, selectedEvent.photos);
  return R.filter(R.propSatisfies(photoBelongsToSelectedEvent, 'id'), R.values(photos));
};

const eventPhotosSelector: Array<Photo> = createSelector(
  selectedEventSelector,
  photosSelector,
  retrieveEventPhotos,
);

export default eventPhotosSelector;
