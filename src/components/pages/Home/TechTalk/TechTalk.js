/* @flow */
import React from 'react';
import R from 'ramda';
import styled from 'styled-components';
import marked from 'marked';

import Header from './Header';
import type { Member, Technology } from '../../../../lib/types';
import { Media, Color } from '../../../../lib/constants';

type Props = {
  index: number,
  speakers: Array<Member>,
  technology: Technology,
  title: string,
  description: string,
  // length?: string,
  // showModal: () => void,
};

type DefaultProps = {
  description: string,
  technology: Technology,
  title: string,
  speakers: Array<Member>,
  length: string,
}

type State = {
  expanded: boolean,
};

function getOrder(index: number): number {
  return R.cond([
    [R.equals(0), R.always(0)],
    [R.equals(1), R.always(2)],
    [R.T, R.always(3)],
  ])(index);
}

const Footer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3px;
  cursor: pointer;
`;

const Title = styled.h1`
  color: ${Color.BACKGROUND_DARK};
  font-size: 1.3rem;
  font-weight: 400;
  padding-top: 15px;
  padding-bottom: 0.5rem;
  margin: 0.4rem 0.75rem 0.5rem 0.75rem;
  text-decoration: underline;
`;

const Description = styled.p`
  display: inline-block;
  max-width: 400px;
  text-overflow: ellipsis;
  white-space: pre-wrap;
  word-wrap: normal;
  line-height: 0;
  margin-left: 0.75rem;
  margin-right: 0.75rem;
`;

class TechTalk extends React.Component {
  static defaultProps: DefaultProps;

  constructor(props: Props) {
    super(props);

    this.state = {
      expanded: false,
    };
  }

  state: State;
  props: Props;
  toggleAccordion: Function;

  toggleAccordion = () => {
    this.setState(R.evolve({ expanded: R.not }));
  };

  render() {
    console.log('speakers', this.props.speakers);
    const direction = R.ifElse(
      R.propEq('expanded', true), R.always('up'), R.always('down'),
    )(this.state);

    const Wrapper = styled.div`
      display: flex;
      flex-direction: column;
      justify-content: center;

      width: 100%;
      max-width: 400px;
      margin: 0 1rem 1rem 1rem;
      background-color: rgba(255,255,255, 0.9);
      border-radius: 3px;

      ${Media.DESKTOP_AND_LARGER_THAN_THAT} {
        order: ${getOrder(this.props.index)};
      }
    `;

    const Accordion = styled.div`
      overflow-y: scroll;
      height: ${this.state.expanded ? '100%' : '150px'};
    `;

    return (
      <Wrapper>
        <Header subject={this.props.technology} />
        <Accordion>
          <Title>{this.props.title}</Title>
          <Description
            dangerouslySetInnerHTML={{ __html: marked(this.props.description) }}
          />
        </Accordion>
        <Footer onClick={this.toggleAccordion}>
          <i className={`angle double ${direction} icon`} />
        </Footer>
      </Wrapper>
    );
  }
}

TechTalk.defaultProps = {
  description: 'tba',
  technology: 'react',
  title: 'tba',
  speakers: [],
  length: '45min',
};

export default TechTalk;
