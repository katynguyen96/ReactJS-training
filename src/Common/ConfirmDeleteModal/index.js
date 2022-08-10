import {
  ModalWrapper,
  Modal,
  Title,
  Content,
  ButtonWrapper,
  Button,
} from "./style";

function ConfirmDeleteModal({ onClosePopup, onOK }) {
  return (
    <ModalWrapper>
      <Modal>
        <Title>Delete</Title>
        <Content>Are you sure delete this products ?</Content>
        <ButtonWrapper>
          <Button yes>
            Yes
          </Button>
          <Button>No</Button>
        </ButtonWrapper>
      </Modal>
    </ModalWrapper>
  );
}
export default ConfirmDeleteModal;