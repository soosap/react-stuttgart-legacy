/* @flow */
import R from 'ramda';

const eventsSelector = (state: Object) => {
  return R.values(state.events);
};

export default eventsSelector;
