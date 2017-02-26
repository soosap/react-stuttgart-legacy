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

const Card = styled.div`
  min-width: 320px;
  // opacity: 0.3 !important;
  background: rgba(255,255,255,0.3) !important;
`;

const SpeakerCard = ({ index, speaker, technology, title, description }: Props) => {
  const Wrapper = styled.div`
    display: flex;
    text-align: left;
    justify-content: center;
    margin: 2em;
    
    background-color: #fff;
    justify-content: center; 
    order: ${getOrder(index)};
    // opacity: 0.3 !important;
    background: rgba(255,255,255,0.3) !important;
  `;


  return (
    <Wrapper>
        <Card className="ui card">
          <div className="image">
            <img src={require(`../../../assets/images/techstack/${technology}.png`)} />
          </div>
          <div className="content">
            <div className="header">{title}</div>
            <div className="description">{description}</div>
          </div>
          <div className="extra content">
            <div className="right floated author">
              <img
                className="ui avatar image"
                src={`https://twitter.com/${speaker.twitter}/profile_image?size=bigger`}
              />
              <TwitterHandle>@{speaker.twitter}</TwitterHandle>

            </div>
          </div>
        </Card>
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
