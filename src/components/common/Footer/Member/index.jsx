/* @flow */
import React from 'react';
import styled from 'styled-components';

type Props = {
  twitter: string,
};

const Wrapper = styled.div`
  margin-left: 10px;
  margin-right: 10px;
`;

const Member = ({ twitter }: Props) => {
  return (
    <Wrapper>
      <img className="ui avatar image" src={`https://twitter.com/${twitter}/profile_image?size=bigger`} />
      <span>@{twitter}</span>
    </Wrapper>
  );
};

export default Member;
