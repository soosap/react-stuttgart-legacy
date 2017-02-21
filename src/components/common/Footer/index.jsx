import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #2F3141;
  padding: 10px;
`;

const Wrapper2 = styled.div`
  padding: 3em;
  text-align: center;
  padding-bottom:4em;
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


      <div className="ui horizontal inverted divider"> <Title>Your #ReactStuttgart Team </Title></div>

      <Wrapper2>
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
      </Wrapper2>



          


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
    </Wrapper>
  );
};

export default Footer;
