/* @flow */
import React, { Element } from 'react';
import R from 'ramda';
import styled from 'styled-components';

import EventTile from './EventTile';
import type { Event } from '../../../../lib/types';

type Props = {
  events: Array<Event>,
  selectEvent: (eventId: string) => void,
  selectedEvent: Event,
};

const Tiles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 2rem;
  margin-bottom: 1rem;
`;

const EventHistory = (props: Props): ?Element<Tiles> => {
  const { events, selectedEvent, selectEvent } = props;
  if (R.isEmpty(events)) return null;

  const sortedEvents = R.reverse(R.sortBy(R.prop('eventDate'))(events));

  return (
    <Tiles>
      {sortedEvents.map((event) => {
        if (R.isNil(event.id)) return null;

        const isActive: boolean = R.propEq('id', event.id, R.defaultTo({}, selectedEvent));

        return (
          <EventTile key={event.id} selectEvent={selectEvent} isActive={isActive} event={event} />
        );
      })}
    </Tiles>
  );
};

export default EventHistory;
