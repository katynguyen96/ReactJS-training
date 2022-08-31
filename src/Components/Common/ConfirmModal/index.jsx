import Button from '../Button'

import {
  StyledModalWrapper, 
  StyledModal, 
  StyledTitle, 
  StyledContent, 
  StyledButtonWrapper, 
  StyledIconBox
} from './style'

const ConfirmModal = ({ onCloseModal, onFeature, icon, content, title }) => {

  //Close Confirm Modal
  const handleCloseConfirmModal = () => {
    onCloseModal()
  }

  return (
    <StyledModalWrapper>
      <StyledModal>
        <StyledIconBox>
          <i className={icon}></i>
        </StyledIconBox>
        <StyledTitle>{title}</StyledTitle>
        <StyledContent>{content}</StyledContent>
        <StyledButtonWrapper>
          <Button 
            className="confirm-delete-button" 
            onClicked={handleCloseConfirmModal} 
            text="Close" 
          />
          <Button 
            inputColor="#f15e5e" 
            className="confirm-delete-button" 
            onClicked={onFeature} 
            text="Delete"
          />
        </StyledButtonWrapper>
      </StyledModal>
    </StyledModalWrapper>
  );
}

export default ConfirmModal;
