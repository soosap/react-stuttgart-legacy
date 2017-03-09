/* @flow */
import React, { Element } from 'react';
import R from 'ramda';
import styled from 'styled-components';
import type { Event } from '../../../../types';

type Props = {
  events: Array<Event>,
  selectEvent: () => void,
  selectedEvent: Event,
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

const EventHistory = ({ selectedEvent, events, selectEvent }: Props): ?Element<Tiles> => {
  if (!events.length) return null;

  return (
    <Wrapper>
      <Tiles>
        {events.reverse().map((event, index) => {
          if (!event.id) return null;
          const isActive = R.equals(R.prop('id', selectedEvent), event.id);
          const displayText = R.cond([
            [R.gte(2), () => event.name],
            [R.T, () => `#${R.slice(0, 1, event.name)}`],
          ])(index);
          return (
            <Tile key={event.id} onClick={() => selectEvent(event.id)} selected={isActive}>
              {displayText}
            </Tile>
          );
        })}
      </Tiles>
    </Wrapper>
  );
};

export default EventHistory;
