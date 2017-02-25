import React, { PropTypes } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  text-align: left;
  justify-content: center;
  margin: 2em;
  
  background-color: #000;
  justify-content: center; 
  order: 0;
`;

const Card = styled.div`
  min-width: 320px;
`;

const TwitterHandle = styled.span`
  font-size: 1.3rem;
`;

const Speaker = ({ twitter, title, description, technology }) => {
  return (
    <Wrapper>
      <Card className="ui card">
        <div className="image">
          {/*<img src={require(`../../../../../assets/images/techstack/${x}.png`)} />*/}
        </div>
        <div className="content">
          <div className="header">{title}</div>
          <div className="description">{description}</div>
        </div>
        <div className="extra content">
          <div className="right floated author">
            <img
              className="ui avatar image"
              src={`https://twitter.com/${twitter}/profile_image?size=bigger`}
            />
            <TwitterHandle>@{twitter}</TwitterHandle>
          </div>
        </div>
      </Card>
    </Wrapper>
  );
};

Speaker.propTypes = {
  description: PropTypes.string.isRequired,
  technology: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  twitter: PropTypes.string.isRequired,
};

Speaker.defaultProps = {
  description: 'A description will follow soon.',
  technology: 'react',
  title: 'To be announced soon...',
};

export default Speaker;
