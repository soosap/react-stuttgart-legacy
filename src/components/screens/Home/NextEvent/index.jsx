/* @flow */
import React from 'react';
import R from 'ramda';
import styled from 'styled-components';
import EventDate from '../NextEvent/EventDate';
import SpeakerCard from '../../../common/SpeakerCard/index.jsx';
import SpeakerWanted from '../../../common/SpeakerCard/SpeakerWanted/index.jsx';
import type { Talk } from '../../../../types';

type Props = {
  talks: Array<Talk>,
  date: Date,
};

const Wrapper = styled.div`
  margin-top: 20vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NextEvent = ({ talks, date }: Props): React$Element<Wrapper> => {
  const renderSpeakerWanted = () => {
    return R.cond([
      [R.gte(R.__, 2), () => null],
      [R.equals(1), R.always(<SpeakerWanted gender="male" />)],
      [R.equals(0), R.always([
        <SpeakerWanted key="0" gender="male" />,
        <SpeakerWanted key="1" gender="female" />
      ])],
    ])(R.length(talks));
  };

  return (
    <Wrapper>
      <EventDate day="07" month="03" year="2017"/>

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
