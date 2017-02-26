/* @flow */
import React from 'react';
import styled from 'styled-components';
import { secondary, backgroundDarkRGB } from '../../../../../assets/styles/colors';

type Props = {
  day: string,
  month: string,
  year: string | number,
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  order: 1
  justify-content: center; 
  order: 1;
`;

const Circle = styled.div`
  font-size: 2.5em;
  text-align: center;
  vertical-align: middle;
  color: ${secondary};
  background: rgba(${backgroundDarkRGB}, 0.9);
	width: 300px;
	height: 300px; 
  padding: 0.5em;
  border-radius: 500em;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Header = styled.h1`
  padding-top: 1em;
  color: white;
  font-family: Lullabies-Text;
`;

const EventDayAndMonth = styled.div`
  font-size: 2.5em;
  padding: 0.5em 0 0 0;
  height: 1.5em;
`;

const EventYear = styled.div`
  padding: 0;
  height: 2em;
`;

const EventDate = ({ day, month, year }: Props) => {
  return (
    <Wrapper>
      <Circle>
        <Header>Next Event</Header>
        <EventDayAndMonth>{day}/{month}</EventDayAndMonth>
        <EventYear>{year}</EventYear>
      </Circle>
    </Wrapper>
  );
};

export default EventDate;
