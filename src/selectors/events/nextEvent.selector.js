/* @flow */
import R from 'ramda';
import { createSelector } from 'reselect';
import type { Event } from '../../lib/types';

import getEvents from './events.selector';
import { getSpeakers } from '../speakers';
import { getSponsors } from '../sponsors';
import { getTalks } from '../talks';
import { getVenues } from '../venues';

const retrieveNextEvent = (
  events: Object,
  speakers: Object,
  sponsors: Object,
  talks: Object,
  venues: Object,
): ?Event => {
  const nextEvent = R.compose(
    R.last,
    R.sortBy(() => Date.parse(R.prop('eventDate'))),
    R.values,
    R.filter(
      R.where({
        eventDate: eventDate => Date.parse(eventDate) > Date.now(),
      }),
    ),
  )(events);

  if (!nextEvent) {
    return undefined;
  }

  const populatedNextEvent = R.compose(
    R.evolve({
      sponsors: R.map(sponsorId => sponsors[sponsorId]),
      talks: R.map(talkId => talks[talkId]),
      venue: venueId => venues[venueId],
    }),
  )(nextEvent);

  return populatedNextEvent;
};

const nextEventSelector = createSelector(
  getEvents,
  getSpeakers,
  getSponsors,
  getTalks,
  getVenues,
  retrieveNextEvent,
);

export default nextEventSelector;
