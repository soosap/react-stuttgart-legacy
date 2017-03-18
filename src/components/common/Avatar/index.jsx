/* @flow */
import React from 'react';
import R from 'ramda';
import styled from 'styled-components';

import { colors } from '../../../assets/styles';

type Props = {
  twitterHandle: string,
  imageUrl?: string,
};

const Wrapper = styled.div`
  ${''/* This makes no sense in a avatar component. border-top is part of the layout */}
  ${''/* border-top: 1px solid rgba(${colors.backgroundDarkRGB}, 0.9); */}
  display: flex;
  justify-content: flex-end;
  padding-right: 0.5rem;
  ${''/* padding-top: 0.3rem; */}
  ${''/* margin-top: 0.5rem; */}
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

const Picture = styled.img`
  width: 25px !important;
  height: 25px !important;
`;

const Avatar = (props: Props) => {
  const pictureSrc = R.ifElse(
    R.compose(R.isNil, R.prop('imageUrl')),
    R.always(`https://twitter.com/${props.twitterHandle}/profile_image?size=bigger`),
    R.prop('imageUrl'),
  )(props);

  // const x = R.propOr(require('../../../assets/images/reactstuttgart@1x.png'), 'imageUrl', props);

  return (
    <Wrapper>
      <Picture
        className="ui circular image"
        src={pictureSrc}
      />
      <TwitterHandle>@{props.twitterHandle}</TwitterHandle>
    </Wrapper>
  );
};

export default Avatar;
