/* @flow */
import React from 'react';
import styled from 'styled-components';
import { Image, List } from 'semantic-ui-react';
import type { Event } from '../../../../types';

type Props = {
  events: Array<Event>,
};

const Wrapper = styled.div`
  border: 1px solid black;
`;

const EventHistory = ({ events }: Props): ?React$Element<Wrapper> => {
  if (!events.length) return null;

  return (
    <Wrapper>
      {events.map(event => (
        <List.Item key={event.id}>
          <List.Content>
            {event.name}
          </List.Content>
        </List.Item>
      ))}
    </Wrapper>
  );
};

export default EventHistory;
