import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import { connect } from 'react-redux';
import { reduxForm, Field, getFormSubmitErrors } from 'redux-form';
import { createFormAction } from 'redux-form-saga';
import { compose } from 'recompose';
import cx from 'classnames';

import styles from './LoginForm.scss';
const REDUX_FORM = 'loginForm';

class LoginForm extends React.Component {
  renderField = ({ input, label, type, placeholder, icon }) => (
    <div className="field">
      <label>{label}</label>
      <div className="ui left icon input">
        <input {...input} type={type} placeholder={placeholder} />
        <i className={`${icon} icon`} />
      </div>
    </div>
  );

  renderFormSubmitErrors = () => {
    const { submitErrors } = this.props;

    return (
      submitErrors && submitErrors.form &&
        <div className="ui message">{submitErrors.form}</div>
    );
  }

  render() {
    const { handleSubmit, submitting } = this.props;
    const cxForm = cx({ 'ui': true, 'loading': submitting, 'form': true });

    return (
      <form className={cxForm} onSubmit={handleSubmit}>
        <h1>Authenticate!</h1>
        <Field
          name="email" type="email" label="Email"
          placeholder="i.e. seetha@saronia.io" icon="mail"
          component={this.renderField}
        />
        <Field
          name="password" type="password" label="Password"
          placeholder="Enter your password..." icon="lock"
          component={this.renderField}
        />
        {this.renderFormSubmitErrors()}
        <button className="ui blue submit button">Login</button>
      </form>
    );
  }
}

export default compose(
  connect(state => ({ submitErrors: getFormSubmitErrors(REDUX_FORM)(state) })),
  reduxForm({ form: REDUX_FORM, onSubmit: createFormAction('AUTH_USER') }),
  CSSModules(styles, { allowMultiple: true, errorWhenNotFound: false }),
)(LoginForm);
