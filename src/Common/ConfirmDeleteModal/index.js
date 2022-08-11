import Button from '../Button'

import {
  ModalWrapper,
  Modal,
  Title,
  Content,
  ButtonWrapper,
} from "./style";

function ConfirmDeleteModal({ handleCloseModal, handleDelete }) {
  return (
    <ModalWrapper>
      <Modal>
        <Title>Delete</Title>
        <Content>Are you sure delete this products ?</Content>
        <ButtonWrapper>
          <Button inputColor="rgba(2, 88, 255, 0.54)" className="confirm-delete-button" onClicked={handleDelete} text="Yes"/>
          <Button className="confirm-delete-button" onClicked={() => handleCloseModal()} text="No" />
        </ButtonWrapper>
      </Modal>
    </ModalWrapper>
  );
}
export default ConfirmDeleteModal;