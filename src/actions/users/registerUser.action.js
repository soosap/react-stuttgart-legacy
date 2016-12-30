import { browserHistory } from 'react-router';
import { REGISTER_USER_SUCCESS } from 'actions/types';

export function userRegistered(payload) {
  // Redirect user to route "/dashboard"
  browserHistory.push('/dashboard');

  // Store jwt token to localStorage
  localStorage.setItem('token', payload.token);

  return { type: REGISTER_USER_SUCCESS, payload };
}
