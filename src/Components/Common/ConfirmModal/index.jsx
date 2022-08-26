import Button from '../Button'

import {
  ModalWrapper,
  Modal,
  Title,
  Content,
  ButtonWrapper,
  IconBox
} from "./style";

const ConfirmModal = ({ handleCloseModal, handleFeature, icon, content, title }) => {

  //Close Confirm Modal
  const handleCloseConfirmModal = () => {
    handleCloseModal()
  }

  return (
    <ModalWrapper>
      <Modal>
        <IconBox>
          <i className={icon}></i>
        </IconBox>
        <Title>{title}</Title>
        <Content>{content}</Content>
        <ButtonWrapper>
          <Button className="confirm-delete-button" onClicked={handleCloseConfirmModal} text="Close" />
          <Button inputColor="#f15e5e" className="confirm-delete-button" onClicked={handleFeature} text="Delete"/>
        </ButtonWrapper>
      </Modal>
    </ModalWrapper>
  );
}
export default ConfirmModal;