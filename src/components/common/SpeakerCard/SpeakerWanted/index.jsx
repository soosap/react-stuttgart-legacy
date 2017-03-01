import React from 'react';

import R from 'ramda';
import styled from 'styled-components';
import type { Speaker, Technology } from '../../../../types';
import { colors, fonts, media } from '../../../../assets/styles';

type Props = {
  index: number,
};

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

const SpeakerWantedIcon = styled.img`
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
const Body = styled.div`
  margin-left: 0.75rem;
  margin-right: 0.75rem;
`;

const Title = styled.h1`
  font-size: 1.3rem;
  font-weight: 400;
  margin-top: 0.4rem !important;
  margin-bottom: 0.5rem;
`;
const Description = styled.p`
  
`;
const Avatar = styled.div`
  border-top: 1px solid rgba(${colors.backgroundDarkRGB}, 0.9);
  display: flex;
  justify-content: flex-end;
  padding-right: 0.5rem;
  padding-top: 0.3rem;
  margin-top: 0.5rem;
  margin-bottom: 0.2rem;
`;
const TwitterHandle = styled.div`
  font-size: 1.1rem;
  font-weight: 400;
  color: ${colors.backgroundDarkRGB};
  margin-left: 0.3rem;
  margin-bottom: 0.25rem;
  opacity: no !important;
  align-self: flex-end;
`;

const TwitterPicture = styled.img`
  width: 25px !important;
  height: 25px !important;
`;

function getOrder(index: number): number {
  return R.cond([
    [R.equals(0), R.always(0)],
    [R.equals(1), R.always(2)],
    [R.T, R.always(3)],
  ])(index);
}

const SpeakerWanted = ({ gender, index }: Props) => {
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
    
    ${media.desktopAndLargerThanThat} {
      order: ${getOrder(index)};
    }
  `;


  return (
    <Wrapper>
    <SpeakerWantedIndicator>
        <SpeakerWantedIcon src={require(`../../../../assets/images/speaker/speaker_wanted.png`)}/>
        <SpeakerWantedName>Become a Speaker</SpeakerWantedName>
    </SpeakerWantedIndicator>
      <Body>
        <Title>React Stuttgart</Title>
        <Description>U have some intressting knowledge about react, grapql, apollo, redux and want to share your knowledge, then contact us.
        <br/>
        <br/>
          <button>Contact Us</button>
        </Description>
      </Body>
      <Avatar>
        <TwitterPicture className="ui circular image" src={`https://twitter.com/reactstuttgart/profile_image?size=bigger`} />
        <TwitterHandle>@reactStuttgart</TwitterHandle>
      </Avatar>

    </Wrapper>
  );
};

export default SpeakerWanted;
