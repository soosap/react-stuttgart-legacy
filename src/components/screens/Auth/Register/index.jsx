import React, { PropTypes } from 'react';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { getFormSubmitErrors } from 'redux-form';
import styled from 'styled-components';

import RegisterForm from './RegisterForm';

const Wrapper = styled.div`
  width: 95%;
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
`;

export class Register extends React.Component {
  render() {
    const { submitErrors } = this.props;

    return (
      <Wrapper>
        <RegisterForm submitErrors={submitErrors} />
      </Wrapper>
    );
  }
}

export default compose(
  connect(state => ({
    submitErrors: getFormSubmitErrors('registerForm')(state),
  })),
)(Register);
