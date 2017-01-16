import { createFormAction } from 'redux-form-saga';

const authenticate = createFormAction('AUTH_USER');
import { userAuthenticated } from './lib/authenticate.action';

const register = createFormAction('REGISTER_USER');
import { userRegistered } from './lib/register.action';

import { logoutUser } from './lib/logout.action';

export {
  authenticate,
  userAuthenticated,
  register,
  userRegistered,
  logoutUser,
};
