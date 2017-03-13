/* @flow */
import React from 'react';
import R from 'ramda';
import styled from 'styled-components';
import type { Member, Technology } from '../../../../types';
import { colors, media } from '../../../../assets/styles';

type Props = {
  index: number,
  speakers: Array<Member>,
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
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
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

const TechTalk = (props: Props) => {
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
      order: ${getOrder(props.index)};
    }
  `;

  const TechnologyName = styled.div`
    color: ${colors.techstack[props.technology]};
    font-size: 1.8rem;
    font-weight: 400;
    padding-bottom: 0.1rem;
  `;

  return (
    <Wrapper>
      <TechnologyIndicator>
        <TechnologyIcon
          src={require(`../../../../assets/images/technology/${props.technology}.png`)}
        />
        <TechnologyName>{props.technology}</TechnologyName>
      </TechnologyIndicator>
      <Body>
        <Title>{props.title}</Title>
        <Description>{props.description}</Description>
      </Body>
      {props.speakers.map(speaker => {
        const twitterHandle = R.propOr('ReactStuttgart', 'twitter', speaker);
        return (
          <Avatar>
            <TwitterPicture
              className="ui circular image"
              src={`https://twitter.com/${twitterHandle}/profile_image?size=bigger`}
            />
            <TwitterHandle>@{twitterHandle}</TwitterHandle>
          </Avatar>
        );
      })}
    </Wrapper>
  );
};

TechTalk.defaultProps = {
  description: 'tba',
  technology: 'react',
  title: 'tba',
};

export default TechTalk;
