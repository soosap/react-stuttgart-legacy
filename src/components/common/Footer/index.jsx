/* @flow */
import React from 'react';
import styled from 'styled-components';

import { colors } from '../../../assets/styles';
import Team from './Team';
import SocialBar from './SocialBar';
import Links from './Links';

const Wrapper = styled.div`
  background: rgba(${colors.secondaryDarkRGB}, 0.9);
`;

const Wallpaper = styled.div`
  background-attachment: fixed;
  background-position: 100%;
  background-size: 100%, 100%;
`;

const Divider = styled.h3`
  color: white;
  font-family: Lullabies-Text;
`;

const Footer = () => {
  return (
    <Wallpaper>
      <Wrapper>
        <SocialBar/>
        <div className="ui horizontal inverted divider">
          <Divider>Organized by</Divider>
        </div>
        <Team />
        <Links/>
      </Wrapper>
    </Wallpaper>
  );
};

export default Footer;
