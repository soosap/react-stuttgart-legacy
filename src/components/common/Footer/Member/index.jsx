/* @flow */
import React from 'react';
import styled from 'styled-components';
import Image from 'react-inlinesvg';

import { colors } from '../../../../assets/styles';

type Props = {
  twitter: string,
  nerd: string,
};

const Wrapper = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0.75rem 1rem;

  &:hover {
    a {
      color: ${colors.secondary};
    }

    svg {
      fill: ${colors.secondary};
    }

    text-decoration: underline;
    cursor: pointer;
  }

  svg {
    fill: ${colors.white};
  }
`;

const Link = styled.a`
  font-size: 1.3rem;
  margin: 5px;
  color: ${colors.white};
  &:hover {
    color: ${colors.secondary};
    text-decoration: underline;
  }
`;

const Member = (props: Props) => {
  return (
    <Wrapper href={`https://twitter.com/${props.twitter}`}>
      <Image
        src={require(`../../../../assets/images/nerds/${props.nerd}.svg`)}
      />
      <Link>@{props.twitter}</Link>
    </Wrapper>
  );
}

export default Member;
