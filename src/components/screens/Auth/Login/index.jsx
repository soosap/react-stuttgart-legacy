import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { isSubmitting, getFormSubmitErrors } from 'redux-form';
import { compose } from 'recompose';
import styled from 'styled-components';
import cx from 'classnames';

import LoginForm from './LoginForm';

const Wrapper = styled.div`
  position: relative;
`;

const Divider = styled.div`
  position: relative;
  padding: 0 !important;
`;

class Login extends React.Component {
  render() {
    const { submitting, submitErrors } = this.props;

    return (
      <Wrapper className="ui two column middle aligned very relaxed stackable grid">
        <div className="column">
          <LoginForm submitErrors={submitErrors} />
        </div>

        <Divider className="ui vertical divider">Or</Divider>
        
        <div className="center aligned column">
          <Link
            to="/auth/register"
            className={cx({'ui big green labeled icon': true, disabled: submitting, button: true})}
          >
            <i className="signup icon" />
            Sign Up
          </Link>
        </div>
      </Wrapper>
    );
  }
}

export default compose(
  connect(state => ({
    submitErrors: getFormSubmitErrors('loginForm')(state),
    submitting: isSubmitting('loginForm')(state),
  })),
)(Login);
