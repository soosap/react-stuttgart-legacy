import { browserHistory } from 'react-router';
import { authenticate } from '../../../actions/users';

export function userRegistered(payload) {
  // Redirect user to route "/dashboard"
  browserHistory.push('/dashboard');

  // Store jwt token to localStorage
  localStorage.setItem('token', payload.token);

  return authenticate.success(payload);
}
