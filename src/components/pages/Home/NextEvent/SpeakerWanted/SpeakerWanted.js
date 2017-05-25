/* @flow */
import React from 'react';
import R from 'ramda';
import { compose, withHandlers } from 'recompose';
import styled from 'styled-components';
import Image from 'react-inlinesvg';
import { Button } from '@saronia/saronia-ui';

import Teaser from './Teaser';
import { Media, Color, BORDER_RADIUS } from '../../../../../lib/constants';
import { BECOME_SPEAKER } from '../../../../modals/types';

type Props = {
  index: number,
  showModal: (modalType: string, modalProps?: Object) => void,
};

function getOrder(index: number): number {
  return R.cond([
    [R.equals(0), R.always(0)],
    [R.equals(1), R.always(2)],
    [R.T, R.always(3)],
  ])(index);
}

const Wrapper = styled.div`
  display: ${props => (props.index % 2 ? 'none' : 'flex')};
  flex-direction: column;
  justify-content: center;

  width: 100%;
  max-width: 240px;
  min-width: 280px;
  margin-left: 1rem;
  margin-right: 1rem;
  margin-bottom: 1rem;
  background-color: rgba(255,255,255, 0.7);

  border-radius: ${BORDER_RADIUS};

  ${Media.TABLET_AND_LARGER_THAN_THAT} {
    display: flex;
  }

  ${Media.DESKTOP_AND_LARGER_THAN_THAT} {
    order: ${props => getOrder(props.index)};
  }
`;

const Body = styled.div`
  margin-left: .75rem;
  margin-right: .75rem;
  margin-bottom: .75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 400;
  margin-top: .7rem;
  margin-bottom: 0.5rem;
`;

const Wanted = styled(Image)`
  /*align-self: ${props => (props.index % 2 ? 'flex-end' : 'flex-start')};*/
  fill: ${Color.BACKGROUND_DARK};
  margin-top: .5rem;
  margin-bottom: .5rem;
`;

const CallToAction = styled(Button)`
  /*align-self: ${props => (props.index % 2 ? 'flex-end' : 'flex-start')};*/
`;

const enhance = compose(
  withHandlers({
    onClick: (props: Props) => () => {
      props.showModal(BECOME_SPEAKER);
    },
  }),
);

const SpeakerWanted = enhance(({ index, onClick }) => (
  <Wrapper index={index}>
    <Teaser index={index} />
    <Body>
      <Title>Speaker wanted!</Title>
      <Wanted
        src={require('../../../../../assets/images/speaker/np_wanted_27332_000000.svg')}
        alt="speaker_wanted"
        index={index}
      />
      <CallToAction index={index} onClick={onClick} breed="primary">
        Take the spot!
      </CallToAction>
    </Body>
  </Wrapper>
));

export default SpeakerWanted;
