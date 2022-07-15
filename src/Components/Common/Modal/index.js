import {Wrapper, Form, Title, Label, Input, Brand, Value} from './style'
import ModalButton from '../Modal-Button'

function Modal () {
	return (
		<Wrapper>
			<Title>Create Product</Title>
			<Form>
				<Label>Product Name</Label>
				<Input/>
				<Label>Price</Label>
				<Input/>
				<Label>Brand</Label>
				<Brand>
					<Value>Iphone</Value>
					<Value>SamSung</Value>
					<Value>Vivo</Value>
				</Brand>
				<Label>Image Link</Label>
				<Input/>
			</Form>
			<ModalButton/>
		</Wrapper>
	)
}

export default Modal