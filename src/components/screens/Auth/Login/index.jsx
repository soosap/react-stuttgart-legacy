import React from 'react';
import CSSModules from 'react-css-modules';
import { Link } from 'react-router';
import { compose } from 'recompose';

import LoginForm from './LoginForm';

import styles from './Login.scss';

// make <Login /> the class-based component and <LoginForm /> a stateless functional component
// pass submitErrors down to <LoginForm />
// Consume isSubmitting and submitErrors from redux-form selectors
// Disable "SignUp" button while "submitting"

const Login = () => {
  return (
    <div styleName="root" className="ui two column middle aligned very relaxed stackable grid">
      <div className="column">
        <LoginForm />
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
