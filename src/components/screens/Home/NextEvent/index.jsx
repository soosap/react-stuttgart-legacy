/* @flow */
import React, { Element } from 'react';
import R from 'ramda';
import styled from 'styled-components';
import EventDate from '../NextEvent/EventDate';
import TechTalk from '../TechTalk';
import SpeakerWanted from '../SpeakerWanted';
import { media } from '../../../../assets/styles';
import type { Event, Talk } from '../../../../types';

type Props = {
  event: ?Event,
};

const Wrapper = styled.div`
  margin-bottom: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  min-height: 700px;

  ${media.tabletAndLargerThanThat} {
    margin-top: 2rem;
  }

  ${media.desktopAndLargerThanThat} {
    margin-top: 3rem;
    flex-direction: row;
  }
`;

const renderSpeakerWanted = (event: ?Event) => {
  return R.cond([
    [R.gte(R.__, 2), R.always(null)],
    [R.equals(1), R.always(<SpeakerWanted index={0} gender="male" />)],
    [R.T, R.always([
      <SpeakerWanted key={0} index={0} gender="male" />,
      <SpeakerWanted key={1} index={1} gender="female" />,
    ])],
  ])(R.length(R.propOr([], 'talks', event)));
};

const renderTechTalks = (talks: Array<Talk>) => {
  return talks.map((talk, index) => {
    const { speakers, technology, description, title } = talk;

    return (
      <TechTalk
        key={title}
        index={index}
        speakers={speakers}
        technology={technology}
        title={title}
        description={description}
      />
    );
  });
};

const NextEvent = ({ event }: Props): Element<Wrapper> => {
  const formattedDate: ?Object = event && ({
    day: (`0${event.eventDate.getDate()}`).slice(-2),
    month: (`0${event.eventDate.getMonth()}`).slice(-2),
    year: event.eventDate.getFullYear(),
  });

  return (
    <Wrapper>
      <EventDate date={formattedDate} />
      {renderTechTalks(R.propOr([], 'talks', event))}
      {renderSpeakerWanted(event)}
    </Wrapper>
  );
};

export default NextEvent;
