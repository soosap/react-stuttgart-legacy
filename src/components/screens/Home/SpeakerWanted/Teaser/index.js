/* @flow */
import React, { Children } from 'react';
import styled from 'styled-components';
import { colors, media } from '../../../../../assets/styles';

type Props = {
  children?: Children,
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background: rgba(${colors.backgroundDarkRGB}, 0.9);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  height: 3rem;

  ${media.desktopAndLargerThanThat} {
    height: 4rem;
  }
`;

const TeaserIcon = styled.img`
  width: 30px;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
`;

const TeaserText = styled.div`
  color: ${colors.white};
  font-size: 1.8rem;
  font-weight: 400;
  padding-bottom: 0.1rem;
`;

const Teaser = ({ children }: Props) => {
  return (
    <Wrapper>
      <TeaserIcon
        src={require('../../../../../assets/images/speaker/speaker_wanted.png')}
      />
      <TeaserText>{children}</TeaserText>
    </Wrapper>
  );
};

Teaser.defaultProps = {
  children: null,
};

export default Teaser;
