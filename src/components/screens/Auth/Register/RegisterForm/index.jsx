import React, { PropTypes } from 'react';
import { reduxForm, Field, Fields } from 'redux-form';
import { createFormAction } from 'redux-form-saga';
import { compose } from 'recompose';
import styled from 'styled-components';
import cx from 'classnames';

const PasswordFields = styled.div`
  padding-bottom: 1em;
`;

const validate = (formProps, reduxForm) => {
  // reduxForm contains submitErrors
  // so we can use this validate function to handle both:
  // server side and client side validation errors!!!
  console.log('reduxForm.submitErrors: ', reduxForm.submitErrors);

  const errors = {};

  if (!formProps.email) {
    errors.email = 'Please enter an email.';
  }

  if (!formProps.password) {
    errors.password = 'Please enter a password.';
  }

  if (!formProps.passwordConfirm) {
    errors.passwordConfirm = 'Please enter a password confirmation.';
  }

  if (formProps.passwordConfirm !== formProps.password) {
    errors.passwordConfirm = 'Passwords must match.';
  }

  return errors;
}

const renderField = ({ input, label, type, placeholder, icon, meta: { error, touched } }) => (
  <div className={cx({ field: true, error: touched && error })}>
    <label>{label}</label>
    <div className="ui left icon input">
      <input {...input} type={type} placeholder={placeholder} />
      <i className={`${icon} icon`} />
    </div>
    {touched && error && <div className="ui pointing label">{error}</div>}
  </div>
);

const renderPasswordFields = ({ password, passwordConfirm }) => (
  <PasswordFields>
    <div className={cx({ field: true, error: passwordConfirm.meta.touched && passwordConfirm.meta.error })}>
      <label>Password:</label>
      <div className="ui left icon input">
        <input {...password.input} type="password" placeholder="Enter your password..." />
        <i className={'unlock alternate icon'} />
      </div>
      {
        password.meta.touched && password.meta.error &&
        <div className="ui pointing label">{password.meta.error}</div>
      }
    </div>
    <div className={cx({ field: true, error: passwordConfirm.meta.touched && passwordConfirm.meta.error })}>
      <div className="ui left icon input">
        <input {...passwordConfirm.input} type="password" placeholder="Confirm your password..." />
        <i className={'lock icon'} />
      </div>
      {
        passwordConfirm.meta.touched && passwordConfirm.meta.error &&
        <div className="ui pointing label">{passwordConfirm.meta.error}</div>
      }
    </div>
  </PasswordFields>
);

const renderFormSubmitErrors = (submitErrors) => (
  submitErrors && submitErrors.form &&
  <div className="ui message">{submitErrors.form}</div>
);

const RegisterForm = ({ handleSubmit, submitting, submitErrors }) => {
  const cxForm = cx({ 'ui': true, 'loading': submitting, 'form': true });

  return (
    <form className={cxForm} onSubmit={handleSubmit}>
      <h1>New account!</h1>
      <Field
        name="email" type="email" label="Email"
        placeholder="seetha@saronia.io" icon="mail"
        component={renderField}
      />
      <Fields
        names={['password', 'passwordConfirm']}
        component={renderPasswordFields}
      />
      {renderFormSubmitErrors(submitErrors)}
      <button className="ui secondary button" type="submit">Sign up!</button>
    </form>
  );
}

export default compose(
  reduxForm({
    form: 'registerForm',
    onSubmit: createFormAction('REGISTER_USER'),
    validate,
  }),
)(RegisterForm);
