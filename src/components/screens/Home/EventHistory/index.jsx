/* @flow */
import React from 'react';
import R from 'ramda';
import styled from 'styled-components';
import { Button, List } from 'semantic-ui-react';
import type { Event } from '../../../../types';
import Tiles from 'grommet/components/Tiles';
import Tile from 'grommet/components/Tile';
import 'grommet/grommet.min.css';

type Props = {
  events: Array<Event>,
  selectEvent: () => void,
  selectedEventId?: string,
};

const EventTiles = styled(Tiles)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const EventTile = styled(Tile)`
  height: 5rem;
  flex-grow: 1;
  vertical-align: middle;
`;


const EventHistory = ({ events, selectedEventId, selectEvent }: Props): ?React$Element<Wrapper> => {
  if (!events.length) return null;

  return (
    <EventTiles selectable={true}>
      {events.reverse().map((event, index) => {
        const isActive = R.equals(selectedEventId, event.id);
        const displayText = R.cond([
          [R.gte(2), () => event.name],
          [R.T, () => `#${R.slice(0, 1, event.name)}`],
        ])(index);
        return (
          <EventTile key={index} onClick={() => selectEvent(event.id)} selected={isActive}>
            {displayText}
          </EventTile>
        );
      })}
    </EventTiles>
  );
};

export default EventHistory;
