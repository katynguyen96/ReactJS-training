import {Wrapper, Form, Title, Label, Input, Brand, Value, WrapperButton} from './style'
import {useState} from 'react'
import Button from '../Button'

function Modal ({text, handleAdd, isCreated, handleCloseModal, handleEdit, theProduct = {}}) {
	const [product, setProduct] = useState(theProduct)

	const handleChange = (e) => {
		const name = e.target.name
		const value = e.target.value
		setProduct({...product, [name]:value})
	}
	
	// const [name, setName] = useState(theProduct.productName)
	const addNewProduct = () => {
		handleAdd({...product})
	}

	const editProduct = () => {
		handleEdit(product)
	}

	const options = [
		{id:1, value: '', text:'Choose brand'},
		{id:2, value:'samsung', text:'Samsung'},
		{id:3, value:'iphone', text:'Iphone'},
		{id:4, value:'vivo', text:'Vivo'},
	]

	return (
		<Wrapper>
			<Title>{text}</Title>
			<Form>
				<Label>Product Name</Label>
				<Input
				name='productName' 
				value={ product.productName || "" }
				onChange={handleChange} 
				/>
				<Label>Price</Label>
				<Input
					name='productPrice'
					value={ product.productPrice || "" }
					onChange={handleChange}
				/>
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
				<Label>Image Link</Label>
				<Input
					name='productImg' 
					value={ product.productImg || "" }
					onChange={handleChange}
				/>
			</Form>
			<WrapperButton>
				<Button inputColor="rgba(2, 88, 255, 0.54)" className='modal-button' text='Save' onClicked={ isCreated ? addNewProduct : editProduct}></Button>
				<Button className='modal-button' text='Close' onClicked={() => handleCloseModal()}></Button>
			</WrapperButton>
		</Wrapper>
	)
}

export default Modal