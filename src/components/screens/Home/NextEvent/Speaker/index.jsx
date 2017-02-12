import React, { PropTypes } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  text-align: left;
  justify-content: center;
  margin: 2em;
`;

const Card = styled.div`
  min-width: 320px;
`;

const TwitterHandle = styled.span`
  font-size: 1.3rem;
`;

const Speaker = ({ twitter, title, description }) => {
  return (
    <Wrapper>
      <Card className="ui card">
        <div className="image">
          <img src="/images/movies/watchmen-horizontal.jpg" />
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
  twitter: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

Speaker.defaultProps = {
  description: 'A description will follow soon.'
};

export default Speaker;
