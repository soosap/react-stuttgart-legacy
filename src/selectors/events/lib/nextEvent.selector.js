/* @flow */
import { createSelector } from 'reselect';
import type { Event } from '../../../types';

const eventsSelector = state => state.events;
const selectedSelector = state => state.selected;

const retrieveNextEvent = (events: Object, selected: Object): ?Event => {
  return selected.event && events[selected.event];
};

// Of course implementation for next event is missing. this is a copy paste from selectedEvent
const nextEventSelector = createSelector(
  eventsSelector,
  selectedSelector,
  retrieveNextEvent,
);

export default nextEventSelector;
