import React from 'react';
import styled from 'styled-components';
import { primary } from '../../../assets/styles/colors';

// #2F3141

const Wrapper = styled.div`
  background-color: ${primary};
  padding: 10px;
`;

const Wrapper2 = styled.div`
  padding: 3em;
  text-align: center;
  padding-bottom:20px;
`;

const Wrapper3 = styled.div`
  padding: 4em;
  text-align: center;
  padding-Top:10px;
  padding-left: 200px;
  padding-right: 200px;
`;

const Wrapper4 = styled.div`
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
    <Wrapper>

      <Wrapper2>
        <i className="facebook inverted big square icon"></i>
        <i className="twitter inverted big square icon"></i>
        <i className="github inverted big square icon"></i>
      </Wrapper2>


      <div className="ui horizontal inverted divider"> Your <Title>#ReactStuttgart</Title> Team </div>

      <Wrapper3>
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
      </Wrapper3>





      <Wrapper4>
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
      </Wrapper4>
    </Wrapper>
  );
};

export default Footer;
