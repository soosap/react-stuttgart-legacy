/* @flow */
import React from 'react';
import styled from 'styled-components';
import { Image, List } from 'semantic-ui-react';
import type { Event } from '../../../../types';

type Props = {
  events: Array<Event>,
  selectEvent: () => void,
};

const Wrapper = styled.div`
  border: 1px solid black;
`;

const EventHistory = ({ events, selectEvent }: Props): ?React$Element<Wrapper> => {
  if (!events.length) return null;

  console.log('events', events);

  return (
    <Wrapper>
      {events.map((event, index) => (
        <List.Item key={index} onClick={selectEvent}>
          <List.Content>
            {event.name}
          </List.Content>
        </List.Item>
      ))}
    </Wrapper>
  );
};

export default EventHistory;
