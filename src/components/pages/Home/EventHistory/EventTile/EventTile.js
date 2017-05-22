/* @flow */
import React from 'react';
import R from 'ramda';
import styled from 'styled-components';

import { Color, BORDER_RADIUS } from '../../../../../lib/constants';
import type { Event } from '../../../../../lib/types';

type Props = {
  event: Event,
  isActive: boolean,
  selectEvent: (eventId: string) => void,
};

const Tile = styled.div`
  padding: .25rem .5rem;
  vertical-align: middle;
  margin: 1.5rem 1.5rem .25rem 1.5rem;
  color: ${props => (props.active ? Color.SECONDARY : Color.WHITE)};
  background-color: ${props => (props.active ? Color.WHITE : Color.SECONDARY)};
  border: 2px solid ${props => (props.active ? Color.BLACK : Color.SECONDARY)};
  border-radius: ${BORDER_RADIUS};
  display: flex;
  flex-direction: column;
  flex: 4;
  height: 110px;
  width: 110px;
  transition: all 0.3s;

  &:hover {
    cursor: pointer;
    color: ${Color.BLACK};
    background-color: ${Color.SECONDARY};
    box-shadow: inset 1px 1px 2px rgba(0,0,0,0.1);
    border: 2px solid ${Color.BLACK};
  }
`;

const Company = styled.div`
  text-align: center;
  flex: 1;
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

const CompanyShort = styled.div`
  font-size: 3rem;
  flex: 3;
  text-transform: uppercase;
  ${''/* font-weight: bold; */}
  font-family: 'Cinzel', serif;
`;

const EventNumber = styled.div`
  font-size: 1rem;
  text-align: right;
  flex: 1;
  font-weight: bold;
`;

const EventTile = ({ event, isActive, selectEvent }: Props) => {
  console.log(event);
  return (
    <div>
      <Tile active={isActive} onClick={() => selectEvent(event.id)}>
        <CompanyShort>
          {R.slice(0, 3, event.sponsors[0].companyShortName)}
        </CompanyShort>
        <EventNumber>
          N°{R.slice(0, 1, event.name)}
        </EventNumber>
      </Tile>
      <Company>
        {event.sponsors[0].companyShortName}
      </Company>
    </div>
  );
};
export default EventTile;
