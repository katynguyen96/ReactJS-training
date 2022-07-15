import  {Wrapper, Image, ItemInfo, Name, Info} from './style'
import ItemButton from '../Edit-Delete-Button'

function CardItem () {
	return (
		<Wrapper>
			<Image src='https://cdn.tgdd.vn/Products/Images/42/230521/iphone-13-pro-thumb-600x600.jpg'/>
			<ItemInfo>
				<Name>SamSung</Name>
				<Info>Price: 200$</Info>
				<Info>Brand: SamSung</Info>
			</ItemInfo>
			<ItemButton/>
		</Wrapper>
	)
}

export default CardItem