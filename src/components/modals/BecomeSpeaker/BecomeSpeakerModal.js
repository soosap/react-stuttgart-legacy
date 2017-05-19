/* @flow */
import React, { Component } from 'react';
import styled from 'styled-components';

import Modal from '../templates/Default';
import BecomeSpeakerForm from '../../forms/BecomeSpeaker';

const Wrapper = styled.div`
  max-width: 500px;
  margin: auto;
  ${''/* display: flex; */}
`;

class BecomeSpeakerModal extends Component {
  render() {
    return (
      <Modal>
        <Wrapper>
          <BecomeSpeakerForm />
        </Wrapper>
      </Modal>
    );
  }
}

export default BecomeSpeakerModal;
