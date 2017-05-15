/* @flow */
import React from 'react';
import styled from 'styled-components';
import { Color, Font, Media } from '../../../../../lib/constants';

type Props = {
  date: ?Object,
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  order: 0;

  ${Media.TABLET_AND_LARGER_THAN_THAT} {
    margin-top: 2.5rem;
    margin-bottom: 1.5rem;
  }

  ${Media.DESKTOP_AND_LARGER_THAN_THAT} {
    order: 1;
    margin-left: 3rem;
    margin-right: 3rem;
  }
`;

const Circle = styled.div`
  font-size: 2.5em;
  color: ${Color.SECONDARY};
  background: rgba(${Color.BACKGROUND_DARK_RGB}, 0.9);
  margin-bottom: 1rem;
  width: 15rem;
  height: 15rem;
  border-radius: 500em;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  ${Media.DESKTOP_AND_LARGER_THAN_THAT} {
    width: 18rem;
    height: 18rem;
  }
`;

const Header = styled.h1`
  padding-top: 2rem;
  margin: 0;
  color: ${Color.WHITE};
  font-family: ${Font.SECONDARY};

  ${Media.DESKTOP_AND_LARGER_THAN_THAT} {
    font-size: 2.2rem;
  }
`;

const EventDayAndMonth = styled.div`
  font-size: 4rem;
  padding-bottom: 0.75rem;

  ${Media.DESKTOP_AND_LARGER_THAN_THAT} {
    font-size: 5rem;
  }
`;

const EventYear = styled.div`
  font-size: 2rem;
  padding-bottom: 1.25rem;

  ${Media.DESKTOP_AND_LARGER_THAN_THAT} {
    font-size: 2.5rem;
  }
`;

const renderContent = (date) => {
  if (!date) {
    return <div>tba</div>;
  }

  return [
    <EventDayAndMonth key={0}>{date.day}/{date.month}</EventDayAndMonth>,
    <EventYear key={1}>{date.year}</EventYear>,
  ];
};

const EventDate = ({ date }: Props) => (
  <Wrapper>
    <Circle>
      <Header>Next Event</Header>
      {renderContent(date)}
    </Circle>
  </Wrapper>
);

export default EventDate;
