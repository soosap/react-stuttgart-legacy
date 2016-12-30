import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import { reduxForm, Field, Fields } from 'redux-form';
import { createFormAction } from 'redux-form-saga';
import { compose } from 'recompose';
import styled from 'styled-components';
import cx from 'classnames';

import styles from './RegisterForm.scss';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

// Create a <Wrapper> react component that renders a <section> with
// some padding and a papayawhip background
const Wrapper = styled.section`
  padding-bottom: 1em;
  // background: papayawhip;
`;

const validate = (values, form) => {
  // form has submitErrors
  // so we can use this validate function to handle both:
  // server side and client side validation errors!!!

  const errors = {};

  if (values.passwordConfirm !== values.password) {
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
    {touched && error && <span className="ui pointing label">{error}</span>}
  </div>
);

const renderPasswordFields = ({ password, passwordConfirm }) => (
  <Wrapper>
    <div className={cx({ field: true, error: passwordConfirm.meta.touched && passwordConfirm.meta.error })}>
      <label>Password:</label>
      <div className="ui left icon input">
        <input {...password.input} type="password" placeholder="Enter your password..." />
        <i className={'unlock alternate icon'} />
      </div>
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
  </Wrapper>
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
  CSSModules(styles, { allowMultiple: true, errorWhenNotFound: false }),
)(RegisterForm);
