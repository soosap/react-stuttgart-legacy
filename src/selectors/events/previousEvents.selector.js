/* @flow */
import R from 'ramda';
import { createSelector } from 'reselect';
import type { Event } from '../../lib/types';

import getEvents from './events.selector';
import { getSpeakers } from '../speakers';
import { getSponsors } from '../sponsors';
import { getTalks } from '../talks';
import { getVenues } from '../venues';

const retrievePreviousEvents = (
  events: Object,
  speakers: Object,
  sponsors: Object,
  talks: Object,
  venues: Object,
): ?Event =>
  R.compose(
    R.map(
      R.evolve({
        talks: R.map(
          R.evolve({
            speakers: R.map(speakerId => speakers[speakerId]),
          }),
        ),
      }),
    ),
    R.map(
      R.evolve({
        sponsors: R.map(sponsorId => sponsors[sponsorId]),
        talks: R.map(talkId => talks[talkId]),
        venue: venueId => venues[venueId],
      }),
    ),
    R.sortBy(() => Date.parse(R.prop('eventDate'))),
    R.values,
    R.filter(
      R.where({
        eventDate: eventDate => Date.parse(eventDate) < Date.now(),
      }),
    ),
  )(events);

const previousEventsSelector = createSelector(
  getEvents,
  getSpeakers,
  getSponsors,
  getTalks,
  getVenues,
  retrievePreviousEvents,
);

export default previousEventsSelector;
