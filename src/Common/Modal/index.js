import {Wrapper, Form, Title, Label, Input, Brand, Value, WrapperButton} from './style'
import {useStore} from '../../store'
import {useState} from 'react'
import Button from '../Button'

function Modal ({text, handleAdd}) {

	const [state, dispatch] = useStore()
	const {id} = state
	const [product, setProduct] = useState({})

	const handleChange = (e) => {
		const name = e.target.name
		const value = e.target.value
		setProduct({...product, [name]:value})
	}

	const [show, setShow] = useState(true)

	const handleCloseModal = (e) => {
		e.preventDefault()
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
				value={product.productName || "" }
				//isCreate ? '' : 
				onChange={handleChange}
				/>
				<Label>Price</Label>
				<Input
					name='productPrice'
					value={product.productPrice || "" }
					onChange={handleChange}
				/>
				<Label>Brand</Label>
				<Brand
					name='productBrand' 
					value={product.productBrand || "" }
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
					value={product.productImg || "" }
					onChange={handleChange}
				/>
			</Form>
			<WrapperButton>
				<Button inputColor="rgba(2, 88, 255, 0.54)" className='modal-button' text='Save' onClicked={() => handleAdd({...product, id})}></Button>
				<Button className='modal-button' text='Close' onClicked={handleCloseModal}></Button>
			</WrapperButton>
		</Wrapper>
	)
}

export default Modal