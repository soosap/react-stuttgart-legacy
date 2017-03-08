/* @flow */
import React, { Element } from 'react';
import R from 'ramda';
import styled from 'styled-components';
import type { Event } from '../../../../types';

type Props = {
  events: Array<Event>,
  selectEvent: () => void,
  selectedEventId: string,
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

const EventHistory = ({ selectedEventId, events, selectEvent }: Props): ?Element<Tiles> => {
  if (!events.length) return null;

  return (
    <Wrapper>
      <Tiles>
        {events.reverse().map((event, index) => {
          const isActive = R.equals(selectedEventId, event.id);
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
