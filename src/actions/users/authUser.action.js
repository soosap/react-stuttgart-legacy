import { AUTH_USER } from 'actions/types';

export default function (payload) {
  return { type: AUTH_USER, payload };
}
