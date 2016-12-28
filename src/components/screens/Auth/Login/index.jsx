import React from 'react';
import CSSModules from 'react-css-modules';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { isSubmitting, getFormSubmitErrors } from 'redux-form';
import { compose } from 'recompose';
import cx from 'classnames';

import LoginForm from './LoginForm';
import styles from './Login.scss';

class Login extends React.Component {
  render() {
    const { submitting, submitErrors } = this.props;

    return (
      <div styleName="root" className="ui two column middle aligned very relaxed stackable grid">
        <div className="column">
          <LoginForm submitErrors={submitErrors} />
        </div>

        <div styleName="divider-column">
          <div className="ui vertical divider">Or</div>
        </div>

        <div className="center aligned column">
          <Link
            to="/auth/register"
            className={cx({'ui big green labeled icon': true, disabled: submitting, button: true})}
          >
            <i className="signup icon" />
            Sign Up
          </Link>
        </div>
      </div>
    );
  }
}

export default compose(
  connect(state => ({
    submitErrors: getFormSubmitErrors('loginForm')(state),
    submitting: isSubmitting('loginForm')(state),
  })),
  CSSModules(styles, { allowMultiple: true, errorWhenNotFound: false }),
)(Login);
