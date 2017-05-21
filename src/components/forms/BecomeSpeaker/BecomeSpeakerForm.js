/* @flow */
import React, { Component } from 'react';
import R from 'ramda';
import { compose } from 'recompose';
import { Field as ReduxFormField, reduxForm } from 'redux-form';
import styled from 'styled-components';
import {
  Input,
  Button,
  H1,
  Field,
  FieldLabel,
  ContextMessage,
  TextArea,
} from '@saronia/saronia-ui';

import { sendEmail } from '../../../actions/contact';
import { BECOME_SPEAKER_FORM } from '../types';
import { Color, ContextEnum } from '../../../lib/constants';

type Props = {
  handleSubmit: () => void,
};

type Values = {
  email: string,
  message?: string,
};

const getContext = R.cond([
  [
    R.propSatisfies(meta => meta.touched && meta.error, 'meta'),
    R.always(ContextEnum.DANGER),
  ],
]);

class BecomeSpeakerForm extends Component {
  props: Props;

  renderInputField = (field: Object) => (
    <Field>
      <FieldLabel>{field.label}</FieldLabel>
      <Input
        {...field.input}
        type={field.type}
        context={getContext(field)}
        placeholder="i.e. dugorim@saronia.com"
      />
      {field.meta.touched &&
        field.meta.error &&
        <ContextMessage context={getContext(field)}>
          {field.meta.error}
        </ContextMessage>}
    </Field>
  );

  renderTextArea = (field: Object) => (
    <Field>
      <FieldLabel>{field.label}</FieldLabel>
      <TextArea
        {...field.input}
        type={field.type}
        context={getContext(field)}
        rows="5"
        placeholder={
          'We are looking for more speaker on React, Redux, GraphQL, Apollo, ' +
            'Relay, FlowType, react-native or anything related. ' +
            'If you have something to share, please reach out. ' +
            'Let us know what you are into:)'
        }
      />
      {field.meta.touched &&
        field.meta.error &&
        <ContextMessage context={getContext(field)}>
          {field.meta.error}
        </ContextMessage>}
    </Field>
  );

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(sendEmail)}>
        <H1>Become a speaker</H1>
        <ReduxFormField
          name="email"
          label="Email"
          component={this.renderInputField}
          type="email"
        />
        <ReduxFormField
          name="message"
          label="Message"
          component={this.renderTextArea}
          type="text"
        />
        <Button type="submit" breed="primary">Get in touch!</Button>
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

export default compose(reduxForm({ form: BECOME_SPEAKER_FORM, validate }))(
  BecomeSpeakerForm,
);
