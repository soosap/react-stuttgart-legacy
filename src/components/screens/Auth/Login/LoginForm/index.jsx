import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import { reduxForm, Field } from 'redux-form';
import { onSubmitActions } from 'redux-form-submit-saga';
import { compose } from 'recompose';
import cx from 'classnames';

import styles from './LoginForm.scss';

const renderField = ({ input, label, type, placeholder, icon }) => (
  <div className="field">
    <label>{label}</label>
    <div className="ui left icon input">
      <input {...input} type={type} placeholder={placeholder} />
      <i className={`${icon} icon`} />
    </div>
  </div>
);

const renderSubmissionError = (submissionError) => (
  submissionError && <div className="ui message">{submissionError}</div>
);

const LoginForm = ({ handleSubmit, submitting, submissionError }) => {
  console.log('submitting: ', submitting);
  const cxForm = cx({ 'ui': true, 'loading': submitting, 'form': true });
  return (
    <form className={cxForm} onSubmit={handleSubmit}>
      <h1>Authenticate!</h1>
      <Field
        name="email" type="email" label="Email"
        placeholder="i.e. seetha@saronia.io" icon="mail"
        component={renderField}
      />
      <Field
        name="password" type="password" label="Password"
        placeholder="Enter your password..." icon="lock"
        component={renderField}
      />
      {renderSubmissionError(submissionError)}
      <button className="ui blue submit button">Login</button>
    </form>
  );
}

LoginForm.propTypes = {
  submissionError: PropTypes.string,
};

export default compose(
  reduxForm({ form: 'loginForm', onSubmit: onSubmitActions('AUTH_USER') }),
  CSSModules(styles, { allowMultiple: true, errorWhenNotFound: false }),
)(LoginForm);
