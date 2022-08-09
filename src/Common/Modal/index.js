import {Wrapper, Form, Title, Label, Input, Brand, Value, WrapperButton} from './style'
import {useState} from 'react'
import Button from '../Button'

function Modal ({text, handleAdd, isCreated, handleCloseModal, handleEdit, theProduct}) {
	const [product, setProduct] = useState({})

	const handleChange = (e) => {
		const name = e.target.name
		const value = e.target.value
		setProduct({...product, [name]:value})
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
				value={ isCreated ? product.productName || "" : theProduct.productName }
				onChange={handleChange}
				/>
				<Label>Price</Label>
				<Input
					name='productPrice'
					value={isCreated ? product.productPrice || "" : theProduct.productPrice }
					onChange={handleChange}
				/>
				<Label>Brand</Label>
				<Brand
					name='productBrand' 
					value={isCreated ? product.productBrand || "" : theProduct.productBrand }
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
					value={isCreated ? product.productImg || "" : theProduct.productImg }
					onChange={handleChange}
				/>
			</Form>
			<WrapperButton>
				<Button inputColor="rgba(2, 88, 255, 0.54)" className='modal-button' text='Save' onClicked={() => handleAdd({...product})}></Button>
				<Button className='modal-button' text='Close' onClicked={() => handleCloseModal()}></Button>
			</WrapperButton>
		</Wrapper>
	)
}

export default Modal