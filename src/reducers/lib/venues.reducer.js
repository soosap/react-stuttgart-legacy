import R from 'ramda';
import { FETCH_VENUES_SUCCESS } from '../../actions/types';

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_VENUES_SUCCESS:
      return R.merge(state, action.payload);
    default:
      return state;
  }
}
