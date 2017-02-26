import React from 'react';
import styled from 'styled-components';

import Member from './Member';
import { secondaryDarkRGB } from '../../../assets/styles/colors';

const Wrapper = styled.div`
  background: rgba(${secondaryDarkRGB}, 0.9)
  padding: 10px;
`;

const Wallpaper = styled.div`
  background-attachment: fixed;
  background-position: 100%; 
  background-size: 100%, 100%;
`;

const Icons = styled.div`
  padding: 3em;
  text-align: center;
  padding-bottom:20px;
`;

const Team = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

const Links = styled.div`
  padding: 1em;
`;

const Title = styled.h3`
  color: white;
  font-family: Lullabies-Text;
`;

const Footer = () => {
  return (
  <Wallpaper>
    <Wrapper>
      <Icons>
        <i className="facebook inverted big square icon" />
        <i className="twitter inverted big square icon" />
        <i className="github inverted big square icon" />
      </Icons>

      <div className="ui horizontal inverted divider">
        <Title>Organized by</Title>
      </div>

      <Team>
        <Member twitter="soosap" />
        <Member twitter="chautzi" />
        <Member twitter="FabioDeVasco" />
      </Team>

      <Links>
        <div className="ui inverted right floated horizontal list">
          <div className="disabled item">© ReactStuttgart</div>
          <a className="item" href="#">Terms</a>
          <a className="item" href="#">Community</a>
          <a className="item" href="#">Contact Us</a>
        </div>
        <div className="ui inverted horizontal list">
          <a className="item" href="#">About Us</a>
          <a className="item" href="#">Become a Speaker</a>
        </div>
      </Links>
    </Wrapper>
  </Wallpaper>
  );
};

export default Footer;
