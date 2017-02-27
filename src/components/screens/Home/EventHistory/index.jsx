/* @flow */
import React from 'react';
import R from 'ramda';
import styled from 'styled-components';
import { Button, List } from 'semantic-ui-react';
import type { Event } from '../../../../types';

type Props = {
  events: Array<Event>,
  selectEvent: () => void,
  selectedEventId?: string,
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const SelectButton = styled(Button)`
  margin-bottom: 10px !important;
`;

const EventHistory = ({ events, selectedEventId, selectEvent }: Props): ?React$Element<Wrapper> => {
  if (!events.length) return null;

  console.log('selectedEventId: ', selectedEventId);
  console.log('events: ', events);

  return (
    <Wrapper>
      {events.map((event, index) => {
        const isActive = R.equals(selectedEventId, event.id);
        return (
          <List.Item key={index} onClick={() => selectEvent(event.id)}>
            <List.Content>
              <SelectButton active={isActive}>{event.name}</SelectButton>
            </List.Content>
          </List.Item>
        );
      })}
    </Wrapper>
  );
};

export default EventHistory;
