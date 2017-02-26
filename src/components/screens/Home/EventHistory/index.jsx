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
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  margin-bottom: 10px !important;
`;

const EventHistory = ({ events, selectEvent }: Props): ?React$Element<Wrapper> => {
  if (!events.length) return null;

  return (
    <Wrapper>
      {events.map((event, index) => (
        <List.Item key={index} onClick={() => selectEvent(event.id)}>
          <List.Content>
            <Button className="ui primary button">{event.name}</Button>
          </List.Content>
        </List.Item>
      ))}
    </Wrapper>
  );
};

export default EventHistory;
