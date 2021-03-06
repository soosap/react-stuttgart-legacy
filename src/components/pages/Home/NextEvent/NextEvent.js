/* @flow */
import React, { Element } from 'react';
import R from 'ramda';
import styled from 'styled-components';

import EventDate from './EventDate';
import TechTalk from './TechTalk';
import SpeakerWanted from './SpeakerWanted';
import { Media } from '../../../../lib/constants';
import type { Event } from '../../../../lib/types';

type Props = {
  event: ?Event,
  showModal: (modalType: string, modalProps?: Object) => void,
};

const Wrapper = styled.div`
  margin-bottom: 1rem;
  margin-top: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
  min-height: 600px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  ${Media.TABLET_AND_LARGER_THAN_THAT} {
    margin: auto;
    margin-top: 2.5rem;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    max-width: 720px;
  }

  ${Media.DESKTOP_AND_LARGER_THAN_THAT} {
    margin-top: 6rem;
    align-items: flex-start;
    flex-wrap: nowrap;
    max-width: unset;
  }
`;

const renderSpeakerWanted = (event: ?Event, showModal: Function) =>
  R.cond([
    [R.gte(R.__, 2), R.always(null)],
    [R.equals(1), R.always(<SpeakerWanted index={0} gender="male" />)],
    [
      R.T,
      R.always([
        <SpeakerWanted key={0} index={0} gender="male" showModal={showModal} />,
        <SpeakerWanted
          key={1}
          index={1}
          gender="female"
          showModal={showModal}
        />,
      ]),
    ],
  ])(R.length(R.propOr([], 'talks', event)));

const renderTechTalks = (
  event: ?Event,
  showModal: Function,
): ?Array<Element<*>> => {
  if (!event || !event.talks) {
    return null;
  }

  return event.talks.map((talk, index) => {
    const { id, speakers, technology, description, title } = talk;

    return (
      <TechTalk
        key={id}
        index={index}
        speakers={speakers}
        technology={technology}
        title={title}
        description={description}
        showModal={showModal}
      />
    );
  });
};

const NextEvent = ({ event, showModal }: Props): Element<Wrapper> => {
  // Todo: Refactor getFormattedDate outside of here
  // Todo: Handle flickering of tba/formattedDate
  const formattedDate: ?Object = R.ifElse(
    R.isNil(),
    R.always(null),
    R.curry((strDate) => {
      const eventDate = new Date(strDate);
      return R.evolve(
        {
          day: R.always(`0${eventDate.getDate()}`.slice(-2)),
          month: R.always(`0${R.inc(eventDate.getMonth())}`.slice(-2)),
          year: R.always(`${eventDate.getFullYear()}`),
        },
        { day: '', month: '', year: '' },
      );
    }),
  )(R.propOr(undefined, 'eventDate', event));

  return (
    <Wrapper>
      <EventDate date={formattedDate} />
      {renderTechTalks(event, showModal)}
      {renderSpeakerWanted(event, showModal)}
    </Wrapper>
  );
};

export default NextEvent;
