/* @flow */
import R from 'ramda';
import { createSelector } from 'reselect';
import type { Event } from '../../../types';

const eventsSelector = state => state.events;

const retrieveNextEvent = (events: Object): ?Event => {
  return R.compose(
    R.head,
    R.sortBy(() => Date.parse(R.prop('eventDate'))),
    R.values,
    R.filter(R.where({
      eventDate: (eventDate) => Date.parse(eventDate) > Date.now(),
    })),
  )(events);
};

const nextEventSelector = createSelector(
  eventsSelector,
  retrieveNextEvent,
);

export default nextEventSelector;
