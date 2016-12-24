import React from 'react';
import CSSModules from 'react-css-modules';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'recompose';

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

const LoginForm = ({ handleSubmit }) => {
  return (
    <form className="ui form" onSubmit={handleSubmit}>
      <Field
        name="username" type="text" label="Username"
        placeholder="i.e. seetha" icon="user"
        component={renderField}
      />
      <Field
        name="email" type="text" label="Email"
        placeholder="i.e. seetha@saronia.io" icon="mail"
        component={renderField}
      />
      <Field
        name="password" type="password" label="Password"
        placeholder="Enter your password..." icon="lock"
        component={renderField}
      />
      <button className="ui blue submit button">Login</button>
    </form>
  );
}

export default compose(
  reduxForm({ form: 'login' }),
  CSSModules(styles, { allowMultiple: true, errorWhenNotFound: false }),
)(LoginForm);
