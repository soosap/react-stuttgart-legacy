/* @flow */
import React from 'react';
import R from 'ramda';
import styled from 'styled-components';

import CallToAction from './CallToAction';
import Teaser from './Teaser';
import { Media } from '../../../../../lib/constants';

type Props = {
  gender: string,
  index: number,
};

function getOrder(index: number): number {
  return R.cond([[R.equals(0), R.always(0)], [R.equals(1), R.always(2)], [R.T, R.always(3)]])(
    index,
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100%;
  max-width: 400px;
  margin-left: 1rem;
  margin-right: 1rem;
  margin-bottom: 1rem
  background-color: rgba(255,255,255, 0.8);
  border-radius: 3px;

  ${Media.DESKTOP_AND_LARGER_THAN_THAT} {
    order: ${props => getOrder(props.index)};
  }
`;

const Body = styled.div`
  margin-left: 0.75rem;
  margin-right: 0.75rem;
`;

const Title = styled.h1`
  font-size: 1.3rem;
  font-weight: 400;
  margin-top: .7rem;
  margin-bottom: 0.5rem;
`;

const Description = styled.p``;

const SpeakerWanted = ({ index, gender }: Props) => {
  return (
    <Wrapper index={index}>
      <Teaser>Redux</Teaser>
      <Body>
        <Title>Call for Speakers</Title>
        <Description>
          We are looking for more speaker on React, Redux, GraphQL, Apollo,
          Relay, Flow, Reason or anything related. If you have something to share,
          please catch up w/ us. {gender}!
        </Description>
        <CallToAction />
      </Body>
    </Wrapper>
  );
};

export default SpeakerWanted;
