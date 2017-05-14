/* @flow */
import React from 'react';
import styled from 'styled-components';
import { colors, fonts, media } from '../../../../../assets/styles';

type Props = {
  date: ?Object,
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
    margin-left: 3rem;
    margin-right: 3rem;
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

  ${media.desktopAndLargerThanThat} {
    width: 18rem;
    height: 18rem;
  }
`;

const Header = styled.h1`
  padding-top: 2rem;
  margin: 0;
  color: ${colors.white};
  font-family: ${fonts.secondary};

  ${media.desktopAndLargerThanThat} {
    font-size: 2.2rem;
  }
`;

const EventDayAndMonth = styled.div`
  font-size: 4rem;
  padding-bottom: 0.75rem;

  ${media.desktopAndLargerThanThat} {
    font-size: 5rem;
  }
`;

const EventYear = styled.div`
  font-size: 2rem;
  padding-bottom: 1.25rem;

  ${media.desktopAndLargerThanThat} {
    font-size: 2.5rem;
  }
`;

const renderContent = date => {
  if (!date) {
    return <div>tba</div>;
  }

  return [
    <EventDayAndMonth key={0}>{date.day}/{date.month}</EventDayAndMonth>,
    <EventYear key={1}>{date.year}</EventYear>,
  ];
};

const EventDate = ({ date }: Props) => {
  return (
    <Wrapper>
      <Circle>
        <Header>Next Event</Header>
        {renderContent(date)}
      </Circle>
    </Wrapper>
  );
};

export default EventDate;
