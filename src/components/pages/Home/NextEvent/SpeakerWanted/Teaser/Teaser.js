/* @flow */
import React, { Children } from 'react';
import styled from 'styled-components';
import { Color, Media } from '../../../../../../lib/constants';

type Props = {
  children?: Children,
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background: rgba(${Color.BACKGROUND_DARK_RGB}, 0.9);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  height: 2.4rem;

  ${Media.DESKTOP_AND_LARGER_THAN_THAT} {
    height: 3rem;
  }
`;

const TeaserText = styled.div`
  color: ${Color.WHITE};
  font-size: 1.6rem;
  font-weight: 400;
  padding: .1rem 1rem;
`;

const Teaser = ({ children }: Props) => (
  <Wrapper>
    <TeaserText>{children}</TeaserText>
  </Wrapper>
);

Teaser.defaultProps = {
  children: null,
};

export default Teaser;
