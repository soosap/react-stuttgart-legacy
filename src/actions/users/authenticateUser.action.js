import { browserHistory } from 'react-router';
import { AUTH_USER, AUTH_USER_SUCCEEDED, AUTH_USER_FAILED } from 'actions/types';

export function authenticateUser(payload) {
  return { type: AUTH_USER, payload };
}

export function userAuthenticated(payload) {
  // Redirect user to route "/dashboard"
  browserHistory.push('/dashboard');

  // Store jwt token to localStorage
  localStorage.setItem('token', payload.token);

  return { type: AUTH_USER_SUCCEEDED };
}

export function userAuthenticationFailed(payload) {

  return { type: AUTH_USER_FAILED, payload };
}
