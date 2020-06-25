import React from 'react';

import { ModalContainer, Modal, H1, Close, CloseContainer } from './style';

export default ({ children, title, onClose }) => {
  const handleClose = () => onClose();

  return (
    <ModalContainer>
      <Modal>
        <CloseContainer>
          <Close onClick={handleClose} />
        </CloseContainer>
        <H1>{title}</H1>
        {children}
      </Modal>
    </ModalContainer>
  );
};
