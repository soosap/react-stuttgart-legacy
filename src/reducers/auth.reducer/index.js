import {
  AUTH_USER, AUTH_USER_SUCCEEDED, AUTH_USER_FAILED,
  UNAUTH_USER,
} from 'actions/types';

export default function (state = {}, action) {
  switch (action.type) {
    case AUTH_USER:
      return state;
    case AUTH_USER_SUCCEEDED:
      if (action.payload && action.payload.user) {
        return { ...state, authenticated: true, user: action.payload.user };
      }

      return { ...state, authenticated: true };
    case AUTH_USER_FAILED:
      return { ...state, authenticated: false, error: action.payload };
    case UNAUTH_USER:
      return { ...state, authenticated: false };
    default:
      return state;
  }
}
