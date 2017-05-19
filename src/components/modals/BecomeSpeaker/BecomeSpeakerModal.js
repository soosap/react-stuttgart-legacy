/* @flow */
import React, { Component } from 'react';

import Modal from '../templates/Default';
import BecomeSpeakerForm from '../../forms/BecomeSpeaker';

class BecomeSpeakerModal extends Component {
  render() {
    return (
      <Modal>
        <BecomeSpeakerForm />
      </Modal>
    );
  }
}

export default BecomeSpeakerModal;
