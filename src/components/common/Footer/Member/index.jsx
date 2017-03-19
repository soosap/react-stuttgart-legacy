/* @flow */
import React from 'react';
import R from 'ramda';
import styled from 'styled-components';
import Isvg from 'react-inlinesvg';

import { colors } from '../../../../assets/styles';

type Props = {
  twitter: string,
  nerd: string,
};

type State = {
  isBeingHovered: boolean,
};

const Wrapper = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0.75rem 1rem;

  &:hover {
    color: ${colors.secondary};
    text-decoration: underline;
    cursor: pointer;
  }
`;

class Member extends React.Component {
  constructor(props: Props) {
    super(props);

    this.state = {
      isBeingHovered: false,
    };
  }

  state: State;
  props: Props;
  toggleHover: () => void;

  toggleHover = () => this.setState(R.evolve({ isBeingHovered: R.not }));

  render() {
    const Link = styled.a`
      font-size: 1.3rem;
      margin: 5px;
      color: ${this.state.isBeingHovered ? colors.secondary : colors.white};
      &:hover {
        color: ${colors.secondary};
        text-decoration: underline;
      }
    `;

    const Image = styled(Isvg)`
      fill: ${this.state.isBeingHovered ? colors.secondary : colors.white};
    `;

    return (
      <Wrapper href={`https://twitter.com/${this.props.twitter}`} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
        <Image src={require(`../../../../assets/images/nerds/${this.props.nerd}.svg`)} />
        <Link>
          @{this.props.twitter}
        </Link>
      </Wrapper>
    );
  }
}

export default Member;
