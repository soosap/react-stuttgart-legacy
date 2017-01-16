import { browserHistory } from 'react-router';
import { UNAUTH_USER } from 'actions/types';

export function logoutUser() {
  // Redirect user to home screen
  browserHistory.push('/');

  // Remove token from localStorage
  localStorage.removeItem('token');

  // Set authenticated flag to false
  return { type: UNAUTH_USER };
}
