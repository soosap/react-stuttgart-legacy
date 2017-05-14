/* @flow */
import React from 'react';
import styled from 'styled-components';
import type { Technology } from '../../../../../types';
import { colors } from '../../../../../assets/styles';

type Props = {
  subject: Technology,
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background: rgba(${colors.backgroundDarkRGB}, 0.9);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  height: 3rem;
`;

const TechnologyIcon = styled.img`
  width: 30px;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
`;

const Header = (props: Props) => {
  const TechnologyName = styled.div`
    color: ${colors.techstack[props.subject]};
    font-size: 1.8rem;
    font-weight: 400;
    padding-bottom: 0.1rem;
`;

  return (
    <Wrapper>
      <TechnologyIcon
        src={require(`../../../../../assets/images/technology/${props.subject}.png`)}
      />
      <TechnologyName>{props.subject}</TechnologyName>
    </Wrapper>
  );
};

Header.defaultProps = {
  subject: 'react',
};

export default Header;
