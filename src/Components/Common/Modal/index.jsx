import {
  StyledModalWrapper,
  StyledWrapper,
  StyledForm,
  StyledTitle,
  StyledInput,
  StyledLabel,
  StyledBrand,
  StyledValue,
  StyledWrapperButton,
  StyledMessage
} from './style'
import {useState} from 'react'
import Button from '../Button'
import {useStore, actions} from '../../../store'
import {BRAND_OPTIONS} from '../../../constants/constants'
import { v4 as uuidv4 } from 'uuid'

const Modal = ({text, isCreated, onCloseModal, editProductValue = {}}) => {//isCreated: set if is create or edit modal
                                                                                              //editProductValue: get from CardItem component 
  //create state for product detail when click in edit button
  const [product, setProduct] = useState(editProductValue)
  //create state for error message
  const [formErrors, setFormErrors] = useState({})

  const [state, dispatch] = useStore()

  //add new product function
  const handleAdd = (product) => {
      dispatch(actions.addProduct(product, product.id = uuidv4()))
      onCloseModal()
  }

  //edit product by id
  const handleEdit = (product) => {
    dispatch(actions.editProduct(product))
    onCloseModal()
  }

  //get the value of the input
  const handleChange = (e) => {
    const {name, value} = e.target
    setProduct({...product, [name]:value})
  }
  
  //validate form function
  const validate = () => {
    const errors = {}
    if(!product.productName) {
      errors.productName = "Product name is required!"
    }
    if(!product.productPrice) {
      errors.productPrice = "Product price is required!"
    } else if(product.productPrice<0){
      errors.productPrice = "Price must be greater than 0"
    }
    if(!product.productBrand) {
      errors.productBrand = "Product brand is required!"
    }
    if(!product.productImg) {
      errors.productImg = "Product image is required!"
    } 
    setFormErrors(errors)
    if(Object.keys(errors).length > 0) 
      return false
    else 
      return true
  }

  //add new product function
  const handleSubmit = (e) => {
    //form validation
    e.preventDefault()
    const isValid = validate()
    if(!isValid) return
    //set is create new modal or edit modal
    if(isCreated) {
      handleAdd({...product})
    } else {
      handleEdit(product)
    }
  }

  //close modal function
  const closeModal = () => {
    onCloseModal()
  }

  return (
  <StyledModalWrapper>
    <StyledWrapper>
      <StyledTitle>{text}</StyledTitle>
      <StyledForm>
        <StyledLabel>Product Name</StyledLabel>
        <StyledInput
        name='productName'
        value={ product.productName || "" }
        onChange={handleChange} 
        />
        <StyledMessage>{formErrors.productName}</StyledMessage>
        <StyledLabel>Price</StyledLabel>
        <StyledInput
          type='number'
          name='productPrice'
          value={ product.productPrice || "" }
          onChange={handleChange}
        />
        <StyledMessage>{formErrors.productPrice}</StyledMessage>
        <StyledLabel>Brand</StyledLabel>
        <StyledBrand
          name='productBrand' 
          value={ product.productBrand || "" }
          onChange={handleChange}
        >
          {BRAND_OPTIONS.map(option=>(
            <StyledValue key={option.id} value={option.value}>
              {option.text}
            </StyledValue>
          ))}
        </StyledBrand>
        <StyledMessage>{formErrors.productBrand}</StyledMessage>
        <StyledLabel>Image Link</StyledLabel>
        <StyledInput
          name='productImg' 
          value={ product.productImg || "" }
          onChange={handleChange}
        />
        <StyledMessage>{formErrors.productImg}</StyledMessage>
      </StyledForm>
      <StyledWrapperButton>
        <Button inputColor="#007bff" className='modal-button' text='Save' onClicked={ handleSubmit }></Button>
        <Button className='modal-button' text='Close' onClicked={closeModal}></Button>
      </StyledWrapperButton>
    </StyledWrapper>
  </StyledModalWrapper> 
  )
}

export default Modal
