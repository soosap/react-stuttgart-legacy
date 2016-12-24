import React from 'react';
import CSSModules from 'react-css-modules';
import { Link } from 'react-router';
import { compose } from 'recompose';

import LoginForm from './LoginForm';

import styles from './Login.scss';

const something = (values) => {
  console.log('values: ', values);
}

const Login = () => {
  return (
    <div styleName="root" className="ui two column middle aligned very relaxed stackable grid">
      <div className="column">
        <h1>Authenticate</h1>
        <LoginForm onSubmit={(values) => something(values)} />
      </div>

      <div styleName="divider-column">
        <div className="ui vertical divider">Or</div>
      </div>

      <div className="center aligned column">
        <Link to="/auth/register" className="ui big green labeled icon button">
          <i className="signup icon" />
          Sign Up
        </Link>
      </div>
    </div>
  );
}

export default compose(
  CSSModules(styles, { allowMultiple: true, errorWhenNotFound: false }),
)(Login);
