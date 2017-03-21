/* @flow */
import React from 'react';
import R from 'ramda';

import CheckListItem from './CheckListItem';

type Props = {
  items: Array<Object>,
};

type State = {
  checked: Array<string>,
};

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
      <div>
        <h1>Checklist</h1>
        {this.props.items.map(item => (
          <CheckListItem
            key={item.id}
            item={item}
            checked={R.contains(item.text, this.state.checked)}
            onChange={this.updateCheckedValues}
          />
        ))}
      </div>
    );
  }
}

export default CheckList;
