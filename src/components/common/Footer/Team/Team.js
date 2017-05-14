/* @flow */
import React from 'react';
import styled from 'styled-components';

import Member from '../Member';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  margin: 2.5rem 2rem;
`;

const Team = () => (
  <Wrapper>
    <Member nerd="nerd4" twitter="soosap" />
    <Member nerd="nerd8" twitter="chautzi" />
    <Member nerd="nerd6" twitter="FabioDeVasco" />
    <Member nerd="nerd13" twitter="BetterCallPaT" />
  </Wrapper>
);

export default Team;
