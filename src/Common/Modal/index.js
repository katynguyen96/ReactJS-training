import {Wrapper, Form, Title, Label, Input, Brand, Value, WrapperButton, Button} from './style'
import {useStore, actions} from '../../store'
import {useState} from 'react'

function Modal ({text, handleAdd}) {

	const [state, dispatch] = useStore()
	const {products, productName, productPrice, productBrand, productImg} = state

	const [show, setShow] = useState(true)

	const handleCloseModal = (e) => {
		e.preventDefault()
	}

	const options = [
		{value:'samsung', text:'Samsung'},
		{value:'iphone', text:'Iphone'},
		{value:'vivo', text:'Vivo'},
	]

	console.log(products)
	return (
		<Wrapper>
			<Title>{text}</Title>
			<Form>
				<Label>Product Name</Label>
				<Input 
				value={productName}
				//isCreate ? '' : 
				onChange={e=>{
					dispatch(actions.setProductName(e.target.value))
					//loai bo action, dung useState
				}}
				/>
				<Label>Price</Label>
				<Input
				value={productPrice}
				onChange={e=>{
					dispatch(actions.setProductPrice(e.target.value))
				}}
				/>
				<Label>Brand</Label>
				<Brand 
					value={productBrand}
					onChange={e=>{
						dispatch(actions.setProductBrand(e.target.value))
					}}
				>
					{options.map(option=>(
						<Value key={option.value} value={option.value}>
							{option.text}
						</Value>
					))}
				</Brand>
				<Label>Image Link</Label>
				<Input 
				value={productImg}
				onChange={e=>{
					dispatch(actions.setProductImage(e.target.value))
				}}
				/>
			</Form>
			<WrapperButton>
				<Button save onClick={() => handleAdd()}>Save</Button>
				<Button onClick={handleCloseModal}>Close</Button>
			</WrapperButton>
		</Wrapper>
	)
}

export default Modal