import {
  authenticate,
} from '../../actions/users';

import { UNAUTH_USER } from '../../actions/types';

export default function (state = {}, action) {
  switch (action.type) {
    case authenticate.REQUEST:
      return state;
    case authenticate.SUCCESS:
      if (action.payload && action.payload.user) {
        return { ...state, authenticated: true, user: action.payload.user };
      }

      return { ...state, authenticated: true };
    case authenticate.FAILURE:
      return { ...state, authenticated: false };
    case UNAUTH_USER:
      return { ...state, authenticated: false };
    default:
      return state;
  }
}
