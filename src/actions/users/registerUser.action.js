import { browserHistory } from 'react-router';
import { AUTH_USER_SUCCESS } from 'actions/types';

export function userRegistered(payload) {
  console.log('are we geting here?');
  console.log('payload: ', payload);

  // Redirect user to route "/dashboard"
  browserHistory.push('/dashboard');

  // Store jwt token to localStorage
  localStorage.setItem('token', payload.token);

  return { type: AUTH_USER_SUCCESS, payload };
}
