/* @flow */
// https://tympanus.net/codrops/2012/04/17/rotating-words-with-css-animations/
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Color, Media } from '../../../../../../lib/constants';

type Props = {
  index: number,
};

const rotateTitle = keyframes`
  0% {
    animation-timing-function: ease-in;
    opacity: .8;
    bottom: 14px;
  }

  2% {
    opacity: 1;
    bottom: 4px;
  }

  10% {
    opacity: 1;
  }

  12% {
    opacity: 0;
  }

  25% {
    opacity: 0;
  }

  100% {
    opacity: 0;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  background: rgba(${Color.SECONDARY_DARK_RGB}, 0.9);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  height: 2.4rem;

  span {
    animation: ${rotateTitle} 36s linear infinite 0s;

    &:nth-child(2) { animation-delay: 4s; }
    &:nth-child(3) { animation-delay: 8s; }
    &:nth-child(4) { animation-delay: 12s; }
    &:nth-child(5) { animation-delay: 16s; }
    &:nth-child(6) { animation-delay: 20s; }
    &:nth-child(7) { animation-delay: 24s; }
    &:nth-child(8) { animation-delay: 28s; }
    &:nth-child(9) { animation-delay: 32s; }
  }

  ${Media.DESKTOP_AND_LARGER_THAN_THAT} {
    height: 3rem;
  }
`;

const Title = styled.span`
  position: absolute;
  opacity: 0;
  overflow: hidden;
  color: ${props => (props.technology ? Color.TechStack[props.technology] : Color.WHITE_DARK)};
  font-size: 1.3rem;
  font-weight: 400;
  padding: 0 .5rem;
  white-space: nowrap;
  left: 50%;
  transform: translate(-50%, 0);

  ${Media.TABLET_AND_LARGER_THAN_THAT} {
    font-size: 1.4rem;
  }

  ${Media.DESKTOP_AND_LARGER_THAN_THAT} {
    font-size: 1.6rem;
    padding: .2rem .75rem;
  }
`;

const Teaser = ({ index }: Props) => (
  <Wrapper>
    <Title technology="REACT">React</Title>
    <Title technology="GRAPHQL">GraphQL</Title>
    <Title technology="REDUX">Redux</Title>
    <Title technology="FLOWTYPE">FlowType</Title>
    <Title>redux-saga</Title>
    <Title index={index} technology="REACT_NATIVE">react-native</Title>
    <Title>redux-form</Title>
    <Title technology="RELAY">Relay</Title>
    <Title>Apollo Client</Title>
  </Wrapper>
);

Teaser.defaultProps = {
  children: null,
};

export default Teaser;
