/* @flow */
import React from 'react';
import { Button } from '@saronia/saronia-ui';

import Modal from '../templates/Default';
import BecomeSpeakerForm from '../../forms/BecomeSpeaker';

const BecomeSpeakerModal = () => {
  return (
    <Modal>
      Become a speaker!
      Work in progress bro...
      <Button accent>Subscribe</Button>
      hello
      <BecomeSpeakerForm />
    </Modal>
  );
};

export default BecomeSpeakerModal;
