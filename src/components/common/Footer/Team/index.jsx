/* @flow */
import React from 'react';
import styled from 'styled-components';

import Member from '../Member';
import { media } from '../../../../assets/styles';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2.5rem 2rem;

  ${media.tabletAndLargerThanThat} {
    flex-direction: row;
    justify-content: center;
  }
`;

const Team = () => {

  return (
    <Wrapper>
      <Member twitter="soosap" />
      <Member twitter="chautzi" />
      <Member twitter="FabioDeVasco" />
      <Member twitter="BetterCallPaT" />
    </Wrapper>
  );
};
export default Team;
