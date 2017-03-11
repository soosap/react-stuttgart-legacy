/* @flow */
import React from 'react';
import styled from 'styled-components';

import { colors } from '../../../../assets/styles';

const Wrapper = styled.div`
  padding: 2rem 1.5rem 1rem 1.5rem;
  text-align: center;
`;

const Icon = styled.i`
  color: ${colors.white} !important;

  &:hover {
    transition: 0.2s ease-in;
    color: ${colors.secondary} !important;
    cursor: pointer;
  }
`;

const SocialBar = () => {
  return (
    <Wrapper>
      <Icon
        href="https://twitter.com/ReactStuttgart"
        className="twitter inverted big square icon"
      />
      <Icon
        href="https://github.com/ReactStuttgart"
        className="github inverted big square icon"
      />
    </Wrapper>
  );
};

export default SocialBar;
