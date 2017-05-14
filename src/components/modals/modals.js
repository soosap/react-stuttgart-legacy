/* @flow */
import React from 'react';
import { connect } from 'react-redux';

import BecomeSpeakerModal from './BecomeSpeaker';
import HostEventModal from './HostEvent';
import ContactUsModal from './ContactUs';
import TechTalkDescription from './TechTalkDescription';
import { BECOME_SPEAKER, HOST_EVENT, CONTACT_US, TECH_TALK_DESCRIPTION } from './types';
import type { Modal } from '../../types';

const MODAL_COMPONENTS = {
  [BECOME_SPEAKER]: BecomeSpeakerModal,
  [HOST_EVENT]: HostEventModal,
  [CONTACT_US]: ContactUsModal,
  [TECH_TALK_DESCRIPTION]: TechTalkDescription,
};

const ModalRoot = ({ modalType, modalProps }: Modal) => {
  if (!modalType) return null;

  const ModalToRender = MODAL_COMPONENTS[modalType];
  return <ModalToRender {...modalProps} />;
};

export default connect(state => state.modal)(ModalRoot);
