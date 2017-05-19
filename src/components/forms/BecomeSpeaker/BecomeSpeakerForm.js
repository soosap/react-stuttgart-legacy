/* @flow */
import React, { Component } from 'react';
import { compose } from 'recompose';
import { Field, reduxForm } from 'redux-form';
import styled from 'styled-components';
import { Input, Button, H1 } from '@saronia/saronia-ui';

import { sendEmail } from '../../../actions/contact';
import { BECOME_SPEAKER_FORM } from '../types';
import { Color } from '../../../lib/constants';

type Props = {
  handleSubmit: () => void,
};

type Values = {
  email: string,
  message?: string,
};

const FieldSet = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: .4rem;
`;

const Label = styled.label`
  margin-bottom: .1rem;
  margin-left: .1rem;
  font-size: .9rem
`;

const ErrorMessage = styled.div`
  color: ${Color.Context.DANGER};
  font-size: .7rem;
  margin-bottom: .2rem;
  margin-left: .1rem;
`;

class BecomeSpeakerForm extends Component {
  props: Props;

  renderInputField = (field: Object) => (
    <FieldSet>
      <Label htmlFor={field.name}>{field.label}</Label>
      <Input {...field.input} type={field.type} invalid={field.meta.touched && field.meta.error} />
      {field.meta.touched && field.meta.error && <ErrorMessage>{field.meta.error}</ErrorMessage>}
    </FieldSet>
  );

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(sendEmail)}>
        <H1>Become a speaker</H1>
        <Field name="email" label="Email" component={this.renderInputField} type="email" />
        <Field name="message" label="Message" component={this.renderInputField} type="text" />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

function validate(values: Values) {
  const errors = {};

  if (!values.email) {
    errors.email = 'Please enter a valid email.';
  }

  return errors;
}

export default compose(
  reduxForm({ form: BECOME_SPEAKER_FORM, validate })
)(BecomeSpeakerForm);
