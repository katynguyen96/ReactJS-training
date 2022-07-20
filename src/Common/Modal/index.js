import {Wrapper, Form, Title, Label, Input, Brand, Value, WrapperButton, Button} from './style'
import {useStore, actions} from '../../store'

function Modal ({text}) {

	const [state, dispatch] = useStore()
	const {products, productName, productPrice, productBrand, productImg} = state

	const handleAdd = () => {
		dispatch(actions.addProduct([productName , productPrice , productBrand , productImg]))
	}

	console.log(products)
	return (
		<Wrapper>
			<Title>{text}</Title>
			<Form>
				<Label>Product Name</Label>
				<Input 
				value={productName}
				onChange={e=>{
					dispatch(actions.setProductName(e.target.value))
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
				<Brand>
					<Value>Iphone</Value>
					<Value>SamSung</Value>
					<Value>Vivo</Value>
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
				<Button save onClick={handleAdd}>Save</Button>
				<Button id="close-button">Close</Button>
				{products.map((product, index)=>{
					return <li key={index}>{product}</li>
				})}
			</WrapperButton>
		</Wrapper>
	)
}

export default Modal