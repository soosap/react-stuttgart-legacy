/* @flow */
import React from 'react';
import R from 'ramda';
import styled from 'styled-components';
import type { Event } from '../../../../types';

type Props = {
  events: Array<Event>,
  selectEvent: () => void,
  selectedEventId?: string,
};

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Tiles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const Tile = styled.div`
  height: 5rem;
  flex-grow: 1;
  vertical-align: middle;
`;

const events = [
  {
    id: 'event5',
    name: '5. Meetup React Stuttgart @Daimler',
  },
  {
    id: 'event6',
    name: '6. Meetup React Stuttgart @ITM',
  },
];

const selectEvent = (eventId) => {
  console.log('eventId: ', eventId);
};

const EventHistory = ({ selectedEventId }: Props): ?React$Element<Tiles> => {
  if (!events.length) return null;

  return (
    <Wrapper>
      <h1>
        I am a header!
      </h1>
      <Tiles>
        {events.reverse().map((event, index) => {
          const isActive = R.equals(selectedEventId, event.id);
          const displayText = R.cond([
            [R.gte(2), () => event.name],
            [R.T, () => `#${R.slice(0, 1, event.name)}`],
          ])(index);
          return (
            <Tile key={index} onClick={() => selectEvent(event.id)} selected={isActive}>
              {displayText}
            </Tile>
          );
        })}
      </Tiles>
    </Wrapper>
  );
};

export default EventHistory;
