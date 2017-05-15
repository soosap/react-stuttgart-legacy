/* @flow */
import { createSelector, type Selector } from 'reselect';
import type { Event } from '../../lib/types';

const eventsSelector = state => state.events;
const selectedSelector = state => state.selected;

const retrieveSelectedEvent = (events: Object, selected: Object): ?Event =>
  selected.event && events[selected.event];

const selectedEventSelector: Selector<*, *, *> = createSelector(
  eventsSelector,
  selectedSelector,
  retrieveSelectedEvent,
);

export default selectedEventSelector;
