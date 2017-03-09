/* @flow */
import { createSelector } from 'reselect';
import type { Event } from '../../../types';

const eventsSelector = state => state.events;
const selectedSelector = state => state.selected;

const retrieveSelectedEvent = (events: Object, selected: Object): ?Event => {
  return selected.event && events[selected.event];
};

const selectedEventSelector: Event = createSelector(
  eventsSelector,
  selectedSelector,
  retrieveSelectedEvent,
);

export default selectedEventSelector;
