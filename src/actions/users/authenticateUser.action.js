import { browserHistory } from 'react-router';
import { AUTH_USER_SUCCESS } from 'actions/types';

export function userAuthenticated(payload) {
  // Redirect user to route "/dashboard"
  browserHistory.push('/dashboard');

  // Store jwt token to localStorage
  localStorage.setItem('token', payload.token);

  // Works as expected but the user data is not available yet.
  // We either need to store the user in localStorage or we need to request user data through token
  return { type: AUTH_USER_SUCCESS, payload };
}
