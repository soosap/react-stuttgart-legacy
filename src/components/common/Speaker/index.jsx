/* @flow */
import React from 'react';
import R from 'ramda';
import styled from 'styled-components';
import { Technology } from '../../../types';

type Props = {
  index: number,
  twitter: string,
  title: string,
  description: string,
  technology: Technology,
};

const Card = styled.div`
  min-width: 320px;
`;

const TwitterHandle = styled.span`
  font-size: 1.2rem;
`;

function getOrder(index: number): number {
  return R.cond([
    [R.equals(0), R.always(0)],
    [R.equals(1), R.always(2)],
    [R.T, R.always(3)],
  ])(index);
}

const Speaker = ({ index, twitter, title, description, technology }: Props) => {
  const Wrapper = styled.div`
    display: flex;
    text-align: left;
    justify-content: center;
    margin: 2em;
    
    background-color: #000;
    justify-content: center; 
    order: ${getOrder(index)};
  `;

  return (
    <Wrapper>
      <Card className="ui card">
        <div className="image">
          <img src={require('../../../assets/images/techstack/react.png')} />
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

Speaker.defaultProps = {
  description: 'tba',
  technology: 'react',
  title: 'tba',
  twitter: 'ReactStuttgart',
};

export default Speaker;
