/* @flow */
import React from 'react';
import styled from 'styled-components';
import { colors, fonts, media } from '../../../../../assets/styles';

type Props = {
  day: string,
  month: string,
  year: string | number,
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  order: 0;
  
  ${media.tabletAndLargerThanThat} {
    margin-top: 2.5rem;  
    margin-bottom: 1.5rem;  
  }
  
  ${media.desktopAndLargerThanThat} {
    order: 1;  
  }
`;

const Circle = styled.div`
  font-size: 2.5em;
  color: ${colors.secondary};
  background: rgba(${colors.backgroundDarkRGB}, 0.9);
  margin-bottom: 1rem;
  
	width: 15rem;
	height: 15rem; 
  border-radius: 500em;
  
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const Header = styled.h1`
  padding-top: 2rem;
  margin: 0;
  color: ${colors.white};
  font-family: ${fonts.secondary};
`;

const EventDayAndMonth = styled.div`
  font-size: 4rem;
  padding-bottom: 0.75rem;
`;

const EventYear = styled.div`
  font-size: 2rem;
  padding-bottom: 1.25rem;
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
