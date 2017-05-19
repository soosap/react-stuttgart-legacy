/* @flow */
import React, { Children } from 'react';
import R from 'ramda';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Modal from 'react-modal';

import { hideModal } from '../../../../actions/modal';
import { Color, BORDER_RADIUS } from '../../../../lib/constants';

type Props = {
  children: ?Children,
  hideModal: () => void,
  modalType: string,
  modalProps: Object,
};

const DefaultModal = ({ children, hideModal, modalType, modalProps }: Props) => {
  const isOpen: boolean = R.complement(R.isNil)(modalType);
  const contentLabel: string = R.propOr('Modal', 'contentLabel', modalProps);
  const style = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.55)',
    },
    content: {
      position: 'absolute',
      top: '40px',
      left: '40px',
      right: '40px',
      bottom: '40px',
      border: `4px solid ${Color.PRIMARY}`,
      background: 'rgba(255, 255, 255, .95)',
      overflow: 'auto',
      WebkitOverflowScrolling: 'touch',
      borderRadius: BORDER_RADIUS,
      outline: 'none',
      padding: '20px',
    },
  };

  return (
    <Modal onRequestClose={hideModal} isOpen={isOpen} contentLabel={contentLabel} style={style}>
      {children}
    </Modal>
  );
};

const mapStateToProps = (state: Object) => ({
  modalType: state.modal.modalType,
  modalProps: state.modal.modalProps,
});

const mapDispatchToProps = (dispatch: Object) => ({
  ...bindActionCreators({ hideModal }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(DefaultModal);
