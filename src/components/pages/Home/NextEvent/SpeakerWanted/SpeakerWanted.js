/* @flow */
import React from 'react';
import R from 'ramda';
import styled from 'styled-components';
import Image from 'react-inlinesvg';

import CallToAction from './CallToAction';
import Teaser from './Teaser';
import { Media, Color } from '../../../../../lib/constants';

type Props = {
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
  margin-bottom: 1rem;
  background-color: rgba(255,255,255, 0.2);

  border-radius: 3px;

  ${Media.DESKTOP_AND_LARGER_THAN_THAT} {
    order: ${props => getOrder(props.index)};
  }
`;

const Body = styled.div`
  margin-left: 0.75rem;
  margin-right: 0.75rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Title = styled.h1`
  font-size: 1.3rem;
  font-weight: 400;
  margin-top: .7rem;
  margin-bottom: 0.5rem;
`;

const Description = styled.p``;

const Wanted = styled(Image)`
  align-self: ${props => (props.index % 2 ? 'flex-end' : 'flex-start')};
  fill: ${Color.BACKGROUND_DARK};
`;

const SpeakerWanted = ({ index }: Props) => (
  <Wrapper index={index}>
    <Teaser>Redux</Teaser>
    <Body>
      <Title>Call for Speakers</Title>
      <Description>
        We are looking for more speaker on React, Redux, GraphQL, Apollo,
        Relay, Flow, Reason or anything related. If you have something to share,
        please catch up w/ us!
      </Description>
      <CallToAction />
      <Wanted
        src={require('../../../../../assets/images/speaker/np_wanted_27332_000000.svg')}
        alt="speaker_wanted"
        index={index}
      />
    </Body>
  </Wrapper>
);

export default SpeakerWanted;
