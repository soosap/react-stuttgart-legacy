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
  color: white;
  font-family: Lullabies-Text;
`;

const Footer = ({ showModal }: Props) => (
  <Wallpaper>
    <Wrapper>
      <SocialBar />
      <div className="ui horizontal inverted divider">
        <Divider>Organized by</Divider>
      </div>
      <Team />
      <Links showModal={showModal} />
    </Wrapper>
  </Wallpaper>
);

export default Footer;
