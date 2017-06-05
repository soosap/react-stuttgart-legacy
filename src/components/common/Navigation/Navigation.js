/* @flow */
import React from 'react';
import styled from 'styled-components';
import { Color, Media } from '../../../lib/constants';

const Wrapper = styled.div`
  background: rgba(${Color.SECONDARY_DARK_RGB}, 0.5);
`;

const Wordmark = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.2rem;
  margin-bottom: 0.2rem;
`;

const Logo = styled.img`
  width: 2rem !important;

  ${Media.TABLET_AND_LARGER_THAN_THAT} {
    width: 3.5rem !important;
  }
`;

const Title = styled.h2`
  margin: 0;
  font-size: 1.5rem;
  font-weight: 400;
  color: ${Color.WHITE};
  padding-left: 0.5rem;
  letter-spacing: .3rem;

  ${Media.TABLET_AND_LARGER_THAN_THAT} {
    font-size: 2rem;
    padding-left: 0.6rem;
    font-weight: 400;
    opacity: 0.9;
  }
`;

const Header = () => (
  <Wrapper>
    <Wordmark>
      <Logo
        className="ui mini image"
        src={require('../../../assets/images/reactstuttgart@1x.png')}
      />
      <Title>#ReactStuttgart</Title>
    </Wordmark>
  </Wrapper>
);

export default Header;
