/* eslint-disable import/prefer-default-export */
import { userAuthenticated } from './lib/authenticateUser.action';
import { userRegistered } from './lib/registerUser.action';

import { logoutUser } from './lib/logoutUser.action';

export {
  userAuthenticated,
  userRegistered,
  logoutUser,
};
