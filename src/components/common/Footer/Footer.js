/* @flow */
import React from 'react';
import styled from 'styled-components';

import { Color } from '../../../lib/constants';
import Team from './Team';
import SocialBar from './SocialBar';
import Links from './Links';

type Props = {
  showModal: (modalType: string, modalProps: Object) => void,
};

const Wrapper = styled.div`
  background: rgba(${Color.SECONDARY_DARK_RGB}, 0.9);
`;

const Wallpaper = styled.div`
  background-attachment: fixed;
  background-position: 100%;
  background-size: 100%, 100%;
`;

const Divider = styled.h3`
  display: flex;
  justify-content: center;
  color: white;
  font-family: Lullabies-Text;
`;

const Footer = ({ showModal }: Props) => (
  <Wallpaper>
    <Wrapper>
      {/* <SocialBar /> */}
      <Divider>Organized by</Divider>
      <Team />
      <Links showModal={showModal} />
    </Wrapper>
  </Wallpaper>
);

export default Footer;
