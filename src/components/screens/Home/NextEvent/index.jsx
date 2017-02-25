/* @flow */
import React from 'react';
import styled from 'styled-components';
import EventDate from '../NextEvent/EventDate';
import SpeakerCard from '../../../common/SpeakerCard/index.jsx';
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
    </Wrapper>
  );
};

export default NextEvent;
