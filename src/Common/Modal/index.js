import {ModalWrapper,Wrapper, Form, Title, Label, Input, Brand, Value, WrapperButton, Message} from './style'
import {useState, useEffect} from 'react'
import Button from '../Button'

function Modal ({text, handleAdd, isCreated, handleCloseModal, handleEdit, theProduct = {}}) {//isCreated: set if is create or edit modal
																																															//theProduct: get from CardItem component	
	//create state for product detail when click in edit button
	const [product, setProduct] = useState(theProduct)
	//create state for error message
	const [formErrors, setFormErrors] = useState({})
	//create state to check submit
	const [isSubmit, setIsSubmit] = useState(false)

	//get the value of the input
	const handleChange = (e) => {
		const {name, value} = e.target
		setProduct({...product, [name]:value})
	}
	
	//validate form function
	const validate = (values) => {
		const image = values.productImg
		const errors = {}
		if(!values.productName) {
			errors.productName = "Product name is required!"
		}
		if(!values.productPrice) {
			errors.productPrice = "Product price is required!"
		} else if(values.productPrice<0){
			errors.productPrice = "Price must be greater than 0"
		}
		if(!values.productBrand) {
			errors.productBrand = "Product brand is required!"
		}
		if(!values.productImg) {
			errors.productImg = "Product image is required!"
		} 
		return errors
	}

	//add new product function
	const addNewProduct = (e) => {
		//form validation
		e.preventDefault()
		//push erros into form errors
		setFormErrors(validate(product))
		setIsSubmit(true)
	}

	useEffect(() => {
		//check if errors has value and form is submit
		if(Object.keys(formErrors).length === 0 && isSubmit){
			//add product function
			handleAdd({...product})
		}
	},[formErrors])

	//edit product function
	const editProduct = () => {
			handleEdit(product)
	}

	//options of filter function
	const options = [
		{id:1, value: '', text:'Choose brand'},
		{id:2, value:'samsung', text:'Samsung'},
		{id:3, value:'iphone', text:'Iphone'},
		{id:4, value:'vivo', text:'Vivo'},
	]

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
					{options.map(option=>(
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
				<Button inputColor="#007bff" className='modal-button' text='Save' onClicked={ isCreated ? addNewProduct : editProduct}></Button>
				<Button className='modal-button' text='Close' onClicked={() => handleCloseModal()}></Button>
			</WrapperButton>
		</Wrapper>
	</ModalWrapper>	
	)
}

export default Modal