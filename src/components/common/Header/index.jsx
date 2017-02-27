import React from 'react';
import styled from 'styled-components';
import { colors, media } from '../../../assets/styles';

const Wrapper = styled.div`
  background: rgba(${colors.backgroundDarkRGB}, 0.5)
`;

const Wordmark = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;

const Logo = styled.img`
  width: 2rem !important;
  
  ${media.tabletAndLargerThanThat} {
    width: 3.5rem !important;
  }
`;

const Title = styled.h2`
  margin: 0;
  font-size: 1.5rem;
  font-weight: 300;
  color: ${colors.white};
  padding-left: 0.5rem;
  
  ${media.tabletAndLargerThanThat} {
    font-size: 2rem;
    padding-left: 0.6rem;
    font-weight: 400;
    opacity: 0.8;
  }
`;

export class Header extends React.Component {
  render() {
    return (
      <Wrapper>
        <Wordmark>
          <Logo className="ui mini image" src={require('../../../assets/images/reactstuttgart@1x.png')} />
          <Title>#ReactStuttgart</Title>
        </Wordmark>
      </Wrapper>
    );
  }
}

export default Header;
