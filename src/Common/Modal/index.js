import {Wrapper, Form, Title, Label, Input, Brand, Value, WrapperButton, Button} from './style'

function Modal ({text}) {
	return (
		<Wrapper>
			<Title>{text}</Title>
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
			<WrapperButton>
				<Button save>Save</Button>
				<Button id="close-button">Close</Button>
			</WrapperButton>
		</Wrapper>
	)
}

export default Modal