/* @flow */
import React from 'react';
import R from 'ramda';
import styled from 'styled-components';
import type { Speaker, Technology } from '../../../types';
import { colors, fonts, media } from '../../../assets/styles';

type Props = {
  index: number,
  speaker: Speaker,
  technology: Technology,
  title: string,
  description: string,
};

function getOrder(index: number): number {
  return R.cond([
    [R.equals(0), R.always(0)],
    [R.equals(1), R.always(2)],
    [R.T, R.always(3)],
  ])(index);
}

const TechnologyIndicator = styled.div`
  display: flex;
  align-items: center;
  background: rgba(${colors.backgroundDarkRGB}, 0.9);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  height: 3rem;
  
  ${media.desktopAndLargerThanThat} {
    height: 4rem;
  }
`;

const TechnologyIcon = styled.img`
  width: 30px;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
`;

const Avatar = styled.div`
  
`;

const TwitterHandle = styled.span`
  font-size: 1.2rem;
  color: ${colors.black};
  font-weight: 900;
  opacity: no !important;
`;

const Topic = styled.div`
  
`;

const SpeakerCard = ({ index, speaker, technology, title, description }: Props) => {
  const Wrapper = styled.div`
    display: flex;
    order: ${getOrder(index)};
    justify-content: center;
    flex-direction: column;
    min-width: 320px;
    
    text-align: left;
    margin-left: 3em;
    margin-right: 3em;
    background-color: rgba(255,255,255,0.5);
    border-radius: 10px;
  `;

  const TechnologyName = styled.div`
    color: ${colors.techstack[technology]};
    font-size: 1.8rem;
    font-weight: 400;
    padding-bottom: 0.1rem;
  `;

  return (
    <Wrapper>
      <TechnologyIndicator>
        <TechnologyIcon src={require(`../../../assets/images/technology/${technology}.png`)}/>
        <TechnologyName>{technology}</TechnologyName>
      </TechnologyIndicator>
      <Topic>
        <div>{title}</div>
        <div>{description}</div>
      </Topic>
      <Avatar>
        <img src={`https://twitter.com/${speaker.twitter}/profile_image?size=bigger`} />
        <TwitterHandle>@{speaker.twitter}</TwitterHandle>
      </Avatar>
    </Wrapper>
  );
};

SpeakerCard.defaultProps = {
  description: 'tba',
  speaker: {
    twitter: 'ReactStuttgart',
  },
  technology: 'react',
  title: 'tba',
};

export default SpeakerCard;
