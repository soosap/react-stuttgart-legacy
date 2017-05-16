/* @flow */
import React from 'react';
import styled from 'styled-components';
import type { Technology } from '../../../../../../lib/types';
import { Color } from '../../../../../../lib/constants';

type Props = {
  subject: Technology,
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background: rgba(${Color.BACKGROUND_DARK_RGB}, 0.9);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  height: 3rem;
`;

const TechnologyName = styled.div`
  color: ${props => Color.TechStack[props.subject.toUpperCase()]};
  font-size: 1.8rem;
  font-weight: 400;
  padding-bottom: 0.1rem;
`;

const TechnologyIcon = styled.img`
  width: 30px;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
`;

const Header = ({ subject }: Props) => (
  <Wrapper>
    <TechnologyIcon src={require(`../../../../../../assets/images/technology/${subject}.png`)} />
    <TechnologyName subject={subject}>{subject}</TechnologyName>
  </Wrapper>
);

Header.defaultProps = {
  subject: 'react',
};

export default Header;
