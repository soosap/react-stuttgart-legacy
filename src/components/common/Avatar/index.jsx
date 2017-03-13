/* @flow */
import React from 'react';
import styled from 'styled-components';

import { colors } from '../../../assets/styles';

const Wrapper = styled.div`
  border-top: 1px solid rgba(${colors.backgroundDarkRGB}, 0.9);
  display: flex;
  justify-content: flex-end;
  padding-right: 0.5rem;
  padding-top: 0.3rem;
  margin-top: 0.5rem;
  margin-bottom: 0.2rem;
`;

const TwitterHandle = styled.div`
  font-size: 1.1rem;
  font-weight: 400;
  color: ${colors.backgroundDarkRGB};
  margin-left: 0.3rem;
  margin-bottom: 0.25rem;
  opacity: no !important;
  align-self: flex-end;
`;

const TwitterPicture = styled.img`
  width: 25px !important;
  height: 25px !important;
`;
const Avatar = () => {
  return (
    <Wrapper>
      <TwitterPicture
        className="ui circular image"
        src={require('../../../assets/images/reactstuttgart@1x.png')}
      />
      <TwitterHandle>@ReactStuttgart</TwitterHandle>
    </Wrapper>
  );
};

export default Avatar;
