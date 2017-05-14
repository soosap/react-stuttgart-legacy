/* @flow */
import React from 'react';
import R from 'ramda';
import styled from 'styled-components';

import CheckListItem from './CheckListItem';
import { Color } from '../../../lib/constants';

type Props = {
  items: Array<Object>,
};

type State = {
  checked: Array<string>,
};

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Header = styled.h1`
  background-color: yellow;
  flex: 0 0 auto;
  height: 50px;
`;

const ScrollableContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  overflow: scroll;
  height: 100vh;
`;

const StickyFooter = styled.div`
  background-color: orange;
  flex: 0 0 auto;
  height: 50px;
`;

const Button = styled.button`
  background-color: ${colors.primary}
  color: ${Color.white}
`;

class CheckList extends React.Component {
  constructor(props: Props) {
    super(props);

    this.state = {
      checked: [],
    };
  }

  state: State;
  props: Props;

  updateCheckedValues = (e: Object) => {
    this.setState(
      R.evolve({
        checked: R.ifElse(
          R.contains(e.target.value),
          R.without([e.target.value]),
          R.compose(R.uniq, R.concat([e.target.value])),
        ),
      }),
    );
  };

  render() {
    return (
      <Wrapper>
        <Header>Checklist</Header>
        <ScrollableContent>
          {this.props.items.map(item => (
            <CheckListItem
              key={item.id}
              item={item}
              checked={R.contains(item.value, this.state.checked)}
              onChange={this.updateCheckedValues}
            />
          ))}
        </ScrollableContent>
        <StickyFooter>
          <Button>submit</Button>
        </StickyFooter>
      </Wrapper>
    );
  }
}

export default CheckList;
