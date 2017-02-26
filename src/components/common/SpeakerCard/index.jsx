/* @flow */
import React from 'react';
import R from 'ramda';
import styled from 'styled-components';
import type { Speaker, Technology } from '../../../types';
import { backgroundDarkRGB, backgroundLight, black, graphql } from '../../../assets/styles/colors';

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

const TwitterHandle = styled.span`
  font-size: 1.2rem;
  color: ${black};
  font-weight: 900;
  opacity: no !important;
`;

const TechnologyIndicator = styled.div`
    display: flex;
    align-items: center;
    background: rgba(${backgroundDarkRGB},0.9);
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`;

const TechnologyIcon = styled.img`
      width: 75px;
      padding: 3%;
`;

const TechnologyName = styled.div`
  
`;


const Avatar = styled.div`
  
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
