import {ModalWrapper,Wrapper, Form, Title, Label, Input, Brand, Value, WrapperButton, Message} from './style'
import {useState} from 'react'
import Button from '../Button'
import {brandOptions} from '../../../constants/constants'

const Modal = ({text, handleAdd, isCreated, handleCloseModal, handleEdit, theProduct = {}}) => {//isCreated: set if is create or edit modal
                                                                                              //theProduct: get from CardItem component 
  //create state for product detail when click in edit button
  const [product, setProduct] = useState(theProduct)
  //create state for error message
  const [formErrors, setFormErrors] = useState({})

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
    handleCloseModal()
  }

  return (
  <ModalWrapper>
    <Wrapper>
      <Title>{text}</Title>
      <Form>
        <Label>Product Name</Label>
        <Input
        name='productName'
        value={ product.productName || "" }
        onChange={handleChange} 
        />
        <Message>{formErrors.productName}</Message>
        <Label>Price</Label>
        <Input
          type='number'
          name='productPrice'
          value={ product.productPrice || "" }
          onChange={handleChange}
        />
        <Message>{formErrors.productPrice}</Message>
        <Label>Brand</Label>
        <Brand
          name='productBrand' 
          value={ product.productBrand || "" }
          onChange={handleChange}
        >
          {brandOptions.map(option=>(
            <Value key={option.id} value={option.value}>
              {option.text}
            </Value>
          ))}
        </Brand>
        <Message>{formErrors.productBrand}</Message>
        <Label>Image Link</Label>
        <Input
          name='productImg' 
          value={ product.productImg || "" }
          onChange={handleChange}
        />
        <Message>{formErrors.productImg}</Message>
      </Form>
      <WrapperButton>
        <Button inputColor="#007bff" className='modal-button' text='Save' onClicked={ handleSubmit }></Button>
        <Button className='modal-button' text='Close' onClicked={closeModal}></Button>
      </WrapperButton>
    </Wrapper>
  </ModalWrapper> 
  )
}

export default Modal
