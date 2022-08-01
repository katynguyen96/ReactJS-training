import  {Wrapper, Image, ItemInfo, Name, Info, WrapperButton, Button} from './style'
import {useStore, actions} from '../../store'
// import {useState} from 'react'

function CardItem () {
	const [state, dispatch] = useStore()

	const {isSearchActive, foundProduct, products} = state

	const currentProduct = isSearchActive ? foundProduct : products

	return (
		<>
			{currentProduct.map((product)=>(
				<Wrapper key={product.id}>
					<Image src={product.productImg}/>
					<ItemInfo>
						<Info brand>{product.productBrand}</Info>
						<Name>{product.productName}</Name>
						<Info>$ {product.productPrice}</Info>
					</ItemInfo>
					<WrapperButton>
						<Button edit><i className="fas fa-edit"></i></Button>
						<Button onClick={() => dispatch(actions.removeProduct(product.id))}><i className="fas fa-trash-alt"></i></Button>
					</WrapperButton>
				</Wrapper>
			))}
		</>
	)
}

export default CardItem