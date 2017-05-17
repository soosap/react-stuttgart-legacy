/* @flow */
// https://tympanus.net/codrops/2012/04/17/rotating-words-with-css-animations/
import React, { Children } from 'react';
import styled, { keyframes } from 'styled-components';
import { Color, Media } from '../../../../../../lib/constants';

type Props = {
  children?: Children,
};

const rotateTitle = keyframes`
  0% {
    animation-timing-function: ease-in;
    opacity: .8;
    top: -10px;
  }

  2% {
    opacity: 1;
    top: 5px;
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
  background: rgba(${Color.BACKGROUND_DARK_RGB}, 0.9);
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
  width: 100%;
  color: ${props => props.technology ? Color.TechStack[props.technology] : Color.WHITE_DARK};
  font-size: 1.6rem;
  font-weight: 400;
  padding: .1rem 1rem;
  white-space: nowrap;
`;

const Teaser = ({ children }: Props) => (
  <Wrapper>
    <Title technology="REACT">React</Title>
    <Title technology="GRAPHQL">GraphQL</Title>
    <Title technology="REDUX">Redux</Title>
    <Title technology="FLOWTYPE">FlowType</Title>
    <Title>redux-saga</Title>
    <Title technology="REACT_NATIVE">react-native</Title>
    <Title>redux-form</Title>
    <Title technology="RELAY">Relay</Title>
    <Title>Apollo Client</Title>
  </Wrapper>
);

Teaser.defaultProps = {
  children: null,
};

export default Teaser;
