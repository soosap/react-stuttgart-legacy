/* @flow */
import React from 'react';
import { compose } from 'recompose';
import { Field, reduxForm } from 'redux-form';

import { BECOME_SPEAKER_FORM } from '../types';

type Props = {
  handleSubmit: () => void,
};

const BecomeSpeakerForm = ({ handleSubmit }: Props) => (
  <form onSubmit={handleSubmit}>
    <div>
      <label htmlFor="email">Email</label>
      <Field name="email" component="input" type="email" />
    </div>
    <button type="submit">Submit</button>
  </form>
);

export default compose(reduxForm({ form: BECOME_SPEAKER_FORM }))(
  BecomeSpeakerForm,
);
