/* @flow */
import React from 'react';
import { Modal } from 'semantic-ui-react';

type Props = {
  onClose: () => void,
  isOpen: boolean,
  dimmer: boolean | 'inverted' | 'blurring',
};

const LightBox = ({ onClose, isOpen, dimmer }: Props) => {
  return (
    <Modal dimmer={dimmer} open={isOpen} onClose={onClose}>
      Gallery
    </Modal>
  );
};

export default LightBox;
