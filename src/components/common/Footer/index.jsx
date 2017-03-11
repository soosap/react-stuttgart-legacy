/* @flow */
import React from 'react';
import styled from 'styled-components';

import Member from './Member';
import BecomeSpeakerModal from '../../modals/BecomeSpeaker';
import { colors, media } from '../../../assets/styles';

const Wrapper = styled.div`
  background: rgba(${colors.secondaryDarkRGB}, 0.9);
`;

const Wallpaper = styled.div`
  background-attachment: fixed;
  background-position: 100%;
  background-size: 100%, 100%;
`;

const Icons = styled.div`
  padding: 2rem 1.5rem 1rem 1.5rem;
  text-align: center;
`;

const Icon = styled.i`
  color: ${colors.white} !important;

  &:hover {
    transition: 0.2s ease-in;
    color: ${colors.secondary} !important;
    cursor: pointer;
  }
`;

const Team = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2.5rem 2rem;

  ${media.tabletAndLargerThanThat} {
    flex-direction: row;
    justify-content: center;
  }
`;

const Links = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 1rem;

  ${media.tabletAndLargerThanThat} {
    justify-content: space-between;
  }
`;

const Link = styled.a`
  margin: 5px;
  color: ${colors.white};
  &:hover {
    color: ${colors.secondary};
    text-decoration: underline;
  }
`;

const Brand = styled.span`
  margin: 5px;
  color: ${colors.secondary};
`;

const Left = styled.div`
  display: flex;
`;

const Right = styled.div`
  display: flex;
`;

const Divider = styled.h3`
  color: white;
  font-family: Lullabies-Text;
`;

const Footer = () => {
  return (
    <Wallpaper>
      <Wrapper>
        <Icons>
          <Icon
            href="https://twitter.com/ReactStuttgart"
            className="twitter inverted big square icon"
          />
          <Icon
            href="https://github.com/ReactStuttgart"
            className="github inverted big square icon"
          />
        </Icons>
        <div className="ui horizontal inverted divider">
          <Divider>Organized by</Divider>
        </div>
        <Team>
          <Member twitter="soosap" />
          <Member twitter="chautzi" />
          <Member twitter="FabioDeVasco" />
          <Member twitter="BetterCallPat" />
        </Team>
        <Links>
          <Left>
            <Brand className="disabled item">© #ReactStuttgart</Brand>
            <Link className="item" href="#">Terms</Link>
            <Link className="item" href="#">Contact Us</Link>
          </Left>
          <Right>
            <Link className="item" href="#">About Us</Link>
            <Link className="item" href="#">Become a Speaker</Link>
            <BecomeSpeakerModal />
          </Right>
        </Links>
      </Wrapper>
    </Wallpaper>
  );
};
export default Footer;
