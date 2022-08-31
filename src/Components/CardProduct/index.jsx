import {
  StyledImage,
  StyledItemInfo,
  StyledName,
  StyledInfo,
  StyledWrapperButton,
  StyledImageWarapper
} from './style'
import Button from '../Common/Button'
import Modal from '../Common/Modal'
import ConfirmModal from '../Common/ConfirmModal'
import {useStore, actions} from '../../store'
import {useState} from 'react'

const CardProduct = ({ theProduct }) => {
//theProduct: get the product when map through products array in products componentt
  const [show, setShow] = useState(false)
  const [showConfirmModal, setShowConfirmModal] = useState(false)
  const [state, dispatch] = useStore()

  //show edit modal function
  const handleShowModal = () => {
    setShow(true)
  }

  //Show confirm delete modal function
  const handleShowConfirmModal = () => {
    setShowConfirmModal(true)
  }

  //Close confirm delete modal function
  const handleCloseConfirmModal = () => {
    setShowConfirmModal(false)
  }

  //close edit modal function
  const handleCloseModal = () => {
    setShow(false)
  }

  //delete product by id
  const handleDelete = (id) => {
    dispatch(actions.removeProduct(id))
    setShowConfirmModal(false)
  } 

  return (
    <>
      <StyledImageWarapper>
        <StyledImage src={theProduct.productImg} alt="phone" />
      </StyledImageWarapper>
      <StyledItemInfo>
        <StyledInfo brand center>{theProduct.productBrand}</StyledInfo>
        <StyledName>{theProduct.productName}</StyledName>
        <StyledInfo price bold center>$ {theProduct.productPrice}</StyledInfo>
      </StyledItemInfo>
      <StyledWrapperButton>
        <Button 
          className="card-button" 
          inputColor="#A3A0C2" 
          icon="fas fa-edit" 
          onClicked={handleShowModal}
        />
        {show && 
          <Modal 
          editProductValue={theProduct} 
          onCloseModal={handleCloseModal} 
          text="Edit Product"
        />}
        {showConfirmModal && 
          <ConfirmModal 
            icon = "fas fa-xmark"
            title = "Are You Sure?"
            content = "Do you really want to delete these records? This process cannot be undone."
            onCloseModal={handleCloseConfirmModal} 
            onFeature={() => handleDelete(theProduct.id)}
          />
        }
        <Button 
          className="card-button" 
          inputColor="#C36C1C" 
          icon="fas fa-trash-alt" 
          onClicked={handleShowConfirmModal}
        />
      </StyledWrapperButton>  
    </>
  )
}

export default CardProduct
