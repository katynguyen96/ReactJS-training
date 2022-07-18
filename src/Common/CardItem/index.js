import  {Wrapper, Image, ItemInfo, Name, Info, WrapperButton, Button} from './style'

function CardItem () {
	return (
		<Wrapper>
			<Image src='https://cdn.tgdd.vn/Products/Images/42/230521/iphone-13-pro-thumb-600x600.jpg'/>
			<ItemInfo>
				<Name>SamSung</Name>
				<Info>Price: 200$</Info>
				<Info>Brand: SamSung</Info>
			</ItemInfo>
			<WrapperButton>
				<Button edit><i className="fas fa-edit"></i></Button>
				<Button><i className="fas fa-trash-alt"></i></Button>
			</WrapperButton>
		</Wrapper>
	)
}

export default CardItem