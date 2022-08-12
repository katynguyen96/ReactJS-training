import Button from '../Button'

import {
  ModalWrapper,
  Modal,
  Title,
  Content,
  ButtonWrapper,
  IconBox
} from "./style";

function ConfirmDeleteModal({ handleCloseModal, handleDelete }) {
  return (
    <ModalWrapper>
      <Modal>
        <IconBox>
          <i className="fas fa-xmark"></i>
        </IconBox>
        <Title>Are You Sure?</Title>
        <Content>Do you really want to delete these records? This process cannot be undone.</Content>
        <ButtonWrapper>
          <Button className="confirm-delete-button" onClicked={() => handleCloseModal()} text="Close" />
          <Button inputColor="#f15e5e" className="confirm-delete-button" onClicked={handleDelete} text="Delete"/>
        </ButtonWrapper>
      </Modal>
    </ModalWrapper>
  );
}
export default ConfirmDeleteModal;