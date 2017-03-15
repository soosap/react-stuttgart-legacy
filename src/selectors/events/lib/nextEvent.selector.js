/* @flow */
import R from 'ramda';
import { createSelector } from 'reselect';
import type { Event } from '../../../types';

import getEvents from './events.selector';
import { getSpeakers } from '../../speakers';
import { getSponsors } from '../../sponsors';
import { getTalks } from '../../talks';
import { getVenues } from '../../venues';

const retrieveNextEvent = (
  events: Object,
  speakers: Object,
  sponsors: Object,
  talks: Object,
  venues: Object,
): ?Event => {
  return R.compose(
    R.evolve({
      talks: R.map(R.evolve({
        speakers: R.map(speakerId => speakers[speakerId])
      })),
    }),
    R.evolve({
      sponsors: R.map(sponsorId => sponsors[sponsorId]),
      talks: R.map(talkId => talks[talkId]),
      venue: venueId => venues[venueId],
    }),
    R.last,
    R.sortBy(() => Date.parse(R.prop('eventDate'))),
    R.values,
    R.filter(
      R.where({
        eventDate: eventDate => Date.parse(eventDate) > Date.now(),
      }),
    ),
  )(events);
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
