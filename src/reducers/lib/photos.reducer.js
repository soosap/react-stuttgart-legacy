import R from 'ramda';
import { FETCH_PHOTOS_SUCCESS } from '../../actions/types';

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_PHOTOS_SUCCESS:
      return R.merge(state, action.payload.photos);
    default:
      return state;
  }
}
