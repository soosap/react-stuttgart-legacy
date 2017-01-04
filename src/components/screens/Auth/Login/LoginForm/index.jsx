import React, { PropTypes } from 'react';
import { reduxForm, Field } from 'redux-form';
import { createFormAction } from 'redux-form-saga';
import { compose } from 'recompose';
import cx from 'classnames';

const validate = (values) => {
  const errors = {};
  
  // console.log('errors: ', errors);
  return errors;
}

const renderField = ({ input, label, type, placeholder, icon }) => (
  <div className="field">
    <label>{label}</label>
    <div className="ui left icon input">
      <input {...input} type={type} placeholder={placeholder} />
      <i className={`${icon} icon`} />
    </div>
  </div>
);

const renderFormSubmitErrors = (submitErrors) => (
    submitErrors && submitErrors.form &&
    <div className="ui message">{submitErrors.form}</div>
);

export const LoginForm = ({ handleSubmit, submitting, submitErrors }) => {
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
      {renderFormSubmitErrors(submitErrors)}
      <button className="ui blue submit button" type="submit">Login</button>
    </form>
  );
}

export default compose(
  reduxForm({
    form: 'loginForm',
    onSubmit: createFormAction('AUTH_USER'),
    validate,
  }),
)(LoginForm);
