/* @flow */
import React from 'react';
import styled from 'styled-components';

import Member from '../Member';
import { media } from '../../../../assets/styles';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;


  margin: 2.5rem 2rem;

  ${''/* ${media.tabletAndLargerThanThat} {
    flex-direction: row;
    justify-content: center;
  } */}
`;

const Team = () => {
  return (
    <Wrapper>
      <Member nerd="nerd4" twitter="soosap" />
      <Member nerd="nerd8" twitter="chautzi" />
      <Member nerd="nerd6" twitter="FabioDeVasco" />
      <Member nerd="nerd13" twitter="BetterCallPaT" />
    </Wrapper>
  );
};
export default Team;
