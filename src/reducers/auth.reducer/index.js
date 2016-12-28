import {
  AUTH_USER_REQUEST, AUTH_USER_SUCCESS, AUTH_USER_FAILURE,
  UNAUTH_USER,
} from 'actions/types';

export default function (state = {}, action) {
  switch (action.type) {
    case AUTH_USER_REQUEST:
      return state;
    case AUTH_USER_SUCCESS:
      if (action.payload && action.payload.user) {
        return { ...state, authenticated: true, user: action.payload.user };
      }

      return { ...state, authenticated: true };
    case AUTH_USER_FAILURE:
      return { ...state, authenticated: false };
    case UNAUTH_USER:
      return { ...state, authenticated: false };
    default:
      return state;
  }
}
