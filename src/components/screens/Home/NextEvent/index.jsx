/* @flow */
import React from 'react';
import R from 'ramda';
import styled from 'styled-components';
import EventDate from '../NextEvent/EventDate';
import SpeakerCard from '../../../common/SpeakerCard/index.jsx';
import SpeakerWanted from '../../../common/SpeakerCard/SpeakerWanted/index.jsx';
import { media } from '../../../../assets/styles';
import type { Talk } from '../../../../types';

type Props = {
  talks: Array<Talk>,
  date: Date,
};

const Wrapper = styled.div`
  margin-top: 1rem;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  ${media.tabletAndLargerThanThat} {
    margin-top: 4rem;  
  }
  
  ${media.desktopAndLargerThanThat} {
    flex-direction: row;  
  }
`;

const NextEvent = ({ talks, date }: Props): React$Element<Wrapper> => {
  const renderSpeakerWanted = () => {
    return R.cond([
      [R.gte(R.__, 2), R.always(null)],
      [R.equals(1), R.always(<SpeakerWanted gender="male" />)],
      [R.equals(0), R.always([
        <SpeakerWanted key="0" gender="male" />,
        <SpeakerWanted key="1" gender="female" />
      ])],
    ])(R.length(talks));
  };

  const day = (`0${date.getDate()}`).slice(-2);
  const month = (`0${date.getMonth()}`).slice(-2);
  const year = date.getFullYear();

  return (
    <Wrapper>
      <EventDate day={day} month={month} year={year} />

      {talks.map((talk, index) => {
        const { speaker, technology, description, title } = talk;

        return (
          <SpeakerCard
            key={index}
            index={index}
            speaker={speaker}
            technology={technology}
            title={title}
            description={description}
          />
        );
      })}

      {renderSpeakerWanted()}
    </Wrapper>
  );
};

export default NextEvent;
