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

  return (
    <Wrapper>
      {events.reverse().map((event, index) => {
        const isActive = R.equals(selectedEventId, event.id);
        const displayText = R.cond([
          [R.gte(2), () => event.name],
          [R.T, () => `#${R.slice(0, 1, event.name)}`],
        ])(index);
        return (
          <List.Item key={index} onClick={() => selectEvent(event.id)}>
            <List.Content>
              <SelectButton active={isActive}>{displayText}</SelectButton>
            </List.Content>
          </List.Item>
        );
      })}
    </Wrapper>
  );
};

export default EventHistory;
