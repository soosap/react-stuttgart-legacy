import { browserHistory } from 'react-router';
import { authenticate } from '../../../actions/users';

export function userAuthenticated(payload) {
  console.log('payload: ', payload);

  // Redirect user to route "/dashboard"
  browserHistory.push('/dashboard');

  // Store jwt token to localStorage
  localStorage.setItem('token', payload.token);

  // Works as expected but the user data is not available yet.
  // We either need to store the user in localStorage or we need to request user data through token
  return authenticate.success(payload);
}
