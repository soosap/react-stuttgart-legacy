import { UNAUTH_USER } from 'actions/types';

export function logoutUser() {
  return { type: UNAUTH_USER };
}
