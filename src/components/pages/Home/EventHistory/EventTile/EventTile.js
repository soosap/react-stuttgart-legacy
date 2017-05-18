/* @flow */
import React from 'react';
import R from 'ramda';
import styled from 'styled-components';

import { Color } from '../../../../../lib/constants';
import type { Event } from '../../../../../lib/types';

type Props = {
  event: Event,
  isActive: boolean,
  selectEvent: (eventId: string) => void,
};

const Wrapper = styled.div``;

const Tile = styled.div`
  vertical-align: middle;
  color: ${props => (props.active ? Color.SECONDARY : Color.WHITE)};
  background-color: ${props => (props.active ? Color.WHITE : Color.SECONDARY)};
  border: 2px solid ${props => (props.active ? Color.BLACK : Color.SECONDARY)};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  flex: 4;
  width: 125px;
  margin-right: .5rem;
  margin-left: .5rem;

  &:hover {
    cursor: pointer;
    color: ${Color.BLACK};
    background-color: ${Color.SECONDARY};
    box-shadow: inset 1px 1px 2px rgba(0,0,0,0.1);
    border: 2px solid ${Color.BLACK};
  }
`;

const Company = styled.h2`
  text-align: center;
  font-size: 1.2rem;
  font-weight: 300;
  color: ${Color.PRIMARY};
`;

const CompanyShort = styled.div`
  font-size: 3rem;
  flex: 3;
`;

const EventNumber = styled.div`
  font-size: 1rem;
  text-align: right;
  flex: 1;
  padding-right: .3rem;
`;

const EventTile = ({ event, isActive, selectEvent }: Props) => (
  <Wrapper>
    <Tile active={isActive} onClick={() => selectEvent(event.id)}>
      <CompanyShort>
        {R.toUpper(R.slice(0, 3, event.sponsors[0].companyShortName))}
      </CompanyShort>
      <EventNumber>
        #{R.slice(0, 1, event.name)}
      </EventNumber>
    </Tile>
    <Company>
      {event.sponsors[0].companyShortName}
    </Company>
  </Wrapper>
);

export default EventTile;
