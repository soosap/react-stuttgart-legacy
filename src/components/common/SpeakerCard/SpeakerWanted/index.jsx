import React from 'react';

import R from 'ramda';
import styled from 'styled-components';
import type { Speaker, Technology } from '../../../../types';
import { colors, fonts, media } from '../../../../assets/styles';

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
    
   
  `;

const SpeakerWantedIndicator = styled.div`
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

const SpeakerWantedIcon = styled.div`
  width: 30px;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
`;

const SpeakerWantedName = styled.div`
    color: #ffffff;
    font-size: 1.8rem;
    font-weight: 400;
    padding-bottom: 0.1rem;
`;
const SpeakerWanted = ({ gender, key }) => {
  return (
    <Wrapper>
    <SpeakerWantedIndicator>
        <SpeakerWantedIcon src={require(`../../../../assets/images/speaker/noun_629820.svg`)}/>
        <SpeakerWantedName>Looking for Speaker</SpeakerWantedName>
    </SpeakerWantedIndicator>
    <div>{gender} Speaker Wanted</div>

    </Wrapper>
  );
};

export default SpeakerWanted;
