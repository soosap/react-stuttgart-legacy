import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { getFormSubmitErrors } from 'redux-form';

import RegisterForm from './RegisterForm';
import styles from './Register.scss';

class Register extends React.Component {
  render() {
    const { submitErrors } = this.props;

    return (
      <div styleName="root">
        <RegisterForm submitErrors={submitErrors} />
      </div>
    );
  }
}

export default compose(
  connect(state => ({
    submitErrors: getFormSubmitErrors('registerForm')(state),
  })),
  CSSModules(styles, { allowMultiple: true, errorWhenNotFound: false }),
)(Register);
