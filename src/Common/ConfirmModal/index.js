import Button from '../Button'

import {
  ModalWrapper,
  Modal,
  Title,
  Content,
  ButtonWrapper,
  IconBox
} from "./style";

function ConfirmModal({ handleCloseModal, handleFeature, icon, content, title }) {
  return (
    <ModalWrapper>
      <Modal>
        <IconBox>
          <i className={icon}></i>
        </IconBox>
        <Title>{title}</Title>
        <Content>{content}</Content>
        <ButtonWrapper>
          <Button className="confirm-delete-button" onClicked={() => handleCloseModal()} text="Close" />
          <Button inputColor="#f15e5e" className="confirm-delete-button" onClicked={handleFeature} text="Delete"/>
        </ButtonWrapper>
      </Modal>
    </ModalWrapper>
  );
}
export default ConfirmModal;