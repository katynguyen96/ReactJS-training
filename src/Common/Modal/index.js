import {ModalWrapper,Wrapper, Form, Title, Label, Input, Brand, Value, WrapperButton, Message} from './style'
import {useState} from 'react'
import Button from '../Button'

function Modal ({text, handleAdd, isCreated, handleCloseModal, handleEdit, theProduct = {}}) {//isCreated: set if is create or edit modal
																																															//theProduct: get from CardItem component	
	//create state for product detail when click in edit button
	const [product, setProduct] = useState(theProduct)
	//create state for error message
	const [nameErrorMessage, setNameErrorMessage] = useState(false)
	const [priceErrorMessage, setPriceErrorMessage] = useState(false)
	const [brandErrorMessage, setBrandErrorMessage] = useState(false)
	const [imageErrorMessage, setImageErrorMessage] = useState(false)

	//get the value when input product details
	const handleChange = (e) => {
		const name = e.target.name
		const value = e.target.value
		setProduct({...product, [name]:value})
		//form validation
		if(value !== '' && name === 'productName'){
			setNameErrorMessage(false)
		}
		if(value !== '' && name === 'productPrice'){
			setPriceErrorMessage(false)
		}
		if(value !== '' && name === 'productBrand'){
			setBrandErrorMessage(false)
		}
		if(value !== '' && name === 'productImg'){
			setImageErrorMessage(false)
		}
	}
	
	//add new product function
	const addNewProduct = () => {
		//form validation
		if(!product.productName){
			setNameErrorMessage(true)
		}
		if(!product.productPrice || Number(product.productPrice) < 0 ){
			setPriceErrorMessage(true)
		}
		if(!product.productBrand){
			setBrandErrorMessage(true)
		}
		if(!product.productImg){
			setImageErrorMessage(true)
		}
		if(product.productName && product.productPrice && product.productBrand && product.productImg){
			handleAdd({...product})
		}
	}
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
				{nameErrorMessage && <Message>Please enter product name</Message>}
				<Label>Price</Label>
				<Input
					type='number'
					name='productPrice'
					value={ product.productPrice || "" }
					onChange={handleChange}
				/>
				{priceErrorMessage && <Message>Please enter product price</Message>}
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
				{brandErrorMessage && <Message>Please choose product brand</Message>}
				<Label>Image Link</Label>
				<Input
					name='productImg' 
					value={ product.productImg || "" }
					onChange={handleChange}
				/>
				{imageErrorMessage && <Message>Please enter product image link</Message>}
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