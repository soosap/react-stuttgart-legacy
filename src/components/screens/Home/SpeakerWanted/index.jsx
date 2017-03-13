/* @flow */
import React from 'react';
import R from 'ramda';
import styled from 'styled-components';

import Teaser from './Teaser';
import { colors, media } from '../../../../assets/styles';

type Props = {
  gender: string,
  index: number,
};

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

const ContactUsButton = styled.button`

`;

const ContactLink = styled.a`
  color:${colors.secondary};
`;

const CallToAction = styled.div`
  display:flex;
  justify-content:center;
`;

function getOrder(index: number): number {
  return R.cond([
    [R.equals(0), R.always(0)],
    [R.equals(1), R.always(2)],
    [R.T, R.always(3)],
  ])(index);
}

const SpeakerWanted = ({ index, gender }: Props) => {
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
      <Teaser>Looking for Speaker</Teaser>
      <Body>
        <Title>React Stuttgart</Title>
        <Description>
          We are looking for more speaker on React, Redux, GraphQL, Apollo,
          Relay, Flow, Reason or anything related. If you have something to share,
          please catch up w/ us. {gender}!
        </Description>
        <CallToAction>
          <ContactUsButton className="ui primary button">
            <ContactLink
              href="mailto:contact@react-stuttgart.de?Subject=Want%20to%20be%20a%20speaker"
              target="_top"
            >
              Contact Us
            </ContactLink>
          </ContactUsButton>
        </CallToAction>
      </Body>
      <Avatar>
        <TwitterPicture
          className="ui circular image"
          src={require('../../../../assets/images/reactstuttgart@1x.png')}
        />
        <TwitterHandle>@ReactStuttgart</TwitterHandle>
      </Avatar>
    </Wrapper>
  );
};

export default SpeakerWanted;
