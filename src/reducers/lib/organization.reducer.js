import R from 'ramda';
import { FETCH_ORGANIZATION_SUCCESS } from '../../actions/types';

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_ORGANIZATION_SUCCESS:
      return state;
    default:
      return state;
  }
}
