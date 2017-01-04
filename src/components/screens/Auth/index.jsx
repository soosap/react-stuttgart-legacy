import React from 'react';
import { compose } from 'recompose';

export const Auth = ({ children }) => (
  <div className="ui basic segment">
    {children}
  </div>
);

export default Auth;
