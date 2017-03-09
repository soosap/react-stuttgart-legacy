/* @flow */
import R from 'ramda';

const photosSelector = (state: Object) => R.values(state.photos);

export default photosSelector;
