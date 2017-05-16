/* @flow */
import React from 'react';
import styled from 'styled-components';
import Image from 'react-inlinesvg';

import { Color } from '../../../../lib/constants';

type Props = {
  twitter: string,
  nerd: string,
};

const Wrapper = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0.75rem 1rem;
  text-decoration: none;

  &:hover {
    div {
      color: ${Color.SECONDARY};
    }

    svg {
      fill: ${Color.SECONDARY};
    }

    text-decoration: underline;
    color: ${Color.SECONDARY};
    cursor: pointer;
  }

  svg {
    fill: ${Color.WHITE};
  }
`;

const Handle = styled.div`
  font-size: 1rem;
  margin: 5px;
  color: ${Color.WHITE};
  &:hover {
    color: ${Color.SECONDARY};
    text-decoration: underline;
  }
`;

const Member = (props: Props) => (
  <Wrapper href={`https://twitter.com/${props.twitter}`}>
    <Image src={require(`../../../../assets/images/nerds/${props.nerd}.svg`)} />
    <Handle>@{props.twitter}</Handle>
  </Wrapper>
);

export default Member;
