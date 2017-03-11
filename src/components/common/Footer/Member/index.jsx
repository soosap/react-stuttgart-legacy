/* @flow */
import React from 'react';
import styled from 'styled-components';

import { colors } from '../../../../assets/styles';

type Props = {
  twitter: string,
};

const Wrapper = styled.div`
  margin: 0.75rem 1rem;
`;

const Image = styled.img`

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

const Member = ({ twitter }: Props) => {
  return (
    <Wrapper>
      <Image
        className="ui avatar image"
        src={`https://twitter.com/${twitter}/profile_image?size=bigger`}
      />
      <Link href={`https://twitter.com/${twitter}`}>@{twitter}</Link>
    </Wrapper>
  );
};

export default Member;
