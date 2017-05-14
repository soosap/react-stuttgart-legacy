/* @flow */
import React from 'react';
import R from 'ramda';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Modal from 'react-modal';
import { hideModal } from '../../../../actions/modal';

type Props = {
  children: ?any,
  hideModal: () => void,
  modalType: string,
  modalProps: Object,
};

const DefaultModal = ({ children, hideModal, modalType, modalProps }: Props) => {
  const isOpen: boolean = R.complement(R.isNil)(modalType);
  const contentLabel: string = R.propOr('Modal', 'contentLabel', modalProps);

  return (
    <Modal onRequestClose={hideModal} isOpen={isOpen} contentLabel={contentLabel}>
      {children}
    </Modal>
  );
};

const mapStateToProps = (state: Object) => ({
  modalType: state.modal.modalType,
  modalProps: state.modal.modalProps,
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({ hideModal }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(DefaultModal);
