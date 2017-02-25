import React from 'react';
import styled from 'styled-components';
import { secondaryDarkRGB } from '../../../assets/styles/colors';



const Wallpaper = styled.div`
  background-attachment: fixed;
  background-position: 100%; 
  background-size: 100%, 100%;
`;

const Wrapper = styled.div`
  background: rgba(${secondaryDarkRGB}, 0.9)
  padding: 10px;
`;

const Iconset = styled.div`
  padding: 3em;
  text-align: center;
  padding-bottom:20px;
`;

const Team = styled.div`
  padding: 4em;
  text-align: center;
  padding-Top:10px;
  padding-left: 200px;
  padding-right: 200px;
`;

const Links = styled.div`
  padding: 1em;
`;

const Title = styled.h3`
  color: white;
  font-family: Lullabies-Text;
`;

const Text = styled.p`
  padding-top: 1em;
  color: white;
  text-align: center;
`;

const Footer = () => {
  return (
  <Wallpaper>
    <Wrapper>
      <Iconset>
        <i className="facebook inverted big square icon" />
        <i className="twitter inverted big square icon" />
        <i className="github inverted big square icon" />
      </Iconset>

      <div className="ui horizontal inverted divider"> Your <Title>#ReactStuttgart</Title> Team </div>

      <Team>
        <div className="ui three column grid">
          <div className="column">
            <Text>
              <img className="ui avatar image" src={`https://twitter.com/soosap/profile_image?size=bigger`} />
              @soosap
            </Text>
          </div>
          <div className="column">
           <Text>
              <img className="ui avatar image" src={`https://twitter.com/chautzi/profile_image?size=bigger`} />
              @schautzi
           </Text>
          </div>
         <div className="column">
           <Text>
              <img className="ui avatar image" src={`https://twitter.com/FabioDeVasco/profile_image?size=bigger`} />
              @FabioDeVasco
            </Text>
          </div>
        </div>
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
