import  {Wrapper, Image, ItemInfo, Name, Info, WrapperButton, Button} from './style'
import {useStore} from '../../store'
// import {useState} from 'react'

function CardItem () {
	const [state] = useStore()

	return (
		<>
			{state.products.map((product, index)=>(
				<Wrapper key={index}>
					<Image src={product.productImg}/>
					<ItemInfo>
						<Name>{product.productName}</Name>
						<Info>Price: {product.productPrice}$</Info>
						<Info>Brand: {product.productBrand}</Info>
					</ItemInfo>
					<WrapperButton>
						<Button edit><i className="fas fa-edit"></i></Button>
						<Button><i className="fas fa-trash-alt"></i></Button>
					</WrapperButton>
				</Wrapper>
			))}
		</>
		
	)
}

export default CardItem