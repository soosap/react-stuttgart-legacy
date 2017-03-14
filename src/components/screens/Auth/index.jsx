/* @flow */
import React, { Children } from 'react';

type Props = {
  children?: Children,
}

export const Auth = ({ children }: Props) => (
  <div className="ui basic segment">
    {children}
  </div>
);

Auth.defaultProps = {
  children: null,
};

export default Auth;
