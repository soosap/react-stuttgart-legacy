/* @flow */
import React, { Element } from 'react';
import R from 'ramda';
import styled from 'styled-components';
import { colors } from '../../../../assets/styles';
import type { Event } from '../../../../types';

type Props = {
  events: Array<Object>,
  selectEvent: () => void,
  selectedEvent: Event,
};

const Tiles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 1rem;
`;

const Tile = styled.div`
  padding: 0.25rem;
  vertical-align: middle;
  margin: 0.25rem;
  background-color: ${colors.secondary};

  &:hover {
    cursor: pointer;
    box-shadow: inset 1px 1px 2px rgba(0,0,0,0.1);
  }
`;

const EventHistory = (
  { selectedEvent, events, selectEvent }: Props,
): ?Element<Tiles> => {
  if (R.isEmpty(events)) return null;

  return (
    <Tiles>
      {events.reverse().map((event, index) => {
        if (R.isNil(event.id)) return null;

        const isActive: boolean = R.propEq('id', event.id, R.defaultTo({}, selectedEvent));
        const displayText: string = R.cond([
          [R.gte(2), () => event.name],
          [R.T, () => `#${R.slice(0, 1, event.name)}`],
        ])(index);

        return (
          <Tile
            key={event.id}
            onClick={() => selectEvent(event.id)}
            selected={isActive}
          >
            {displayText}
          </Tile>
        );
      })}
    </Tiles>
  );
};

export default EventHistory;
