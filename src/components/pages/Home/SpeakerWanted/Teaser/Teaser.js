/* @flow */
import React, { Children } from 'react';
import styled from 'styled-components';
import { Color, Media } from '../../../../../lib/constants';

type Props = {
  children?: Children,
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background: rgba(${Color.BACKGROUND_DARK_RGB}, 0.9);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  height: 3rem;

  ${Media.DESKTOP_AND_LARGER_THAN_THAT} {
    height: 4rem;
  }
`;

const TeaserIcon = styled.img`
  width: 30px;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
`;

const TeaserText = styled.div`
  color: ${Color.WHITE};
  font-size: 1.8rem;
  font-weight: 400;
  padding-bottom: 0.1rem;
`;

const Teaser = ({ children }: Props) => (
  <Wrapper>
    <TeaserIcon src={require('../../../../../assets/images/speaker/speaker_wanted.png')} />
    <TeaserText>{children}</TeaserText>
  </Wrapper>
);

Teaser.defaultProps = {
  children: null,
};

export default Teaser;
