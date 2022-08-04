import  {Wrapper, Image, ItemInfo, Name, Info, WrapperButton, ImageWarapper} from './style'
import {useStore, actions} from '../../store'
import Button from '../Button'
// import {useState} from 'react'

function CardItem ({handleDelete}) {
	const [state, dispatch] = useStore()

	const {isSearchActive, foundProduct, products} = state

	const currentProduct = isSearchActive ? foundProduct : products

	return (
		<>
			{currentProduct.map((product)=>(
				<Wrapper key={product.id}>
				<ImageWarapper>
					<Image src={product.productImg}/>
					</ImageWarapper>
					<ItemInfo>
						<Info brand>{product.productBrand}</Info>
						<Name>{product.productName}</Name>
						<Info>$ {product.productPrice}</Info>
					</ItemInfo>
					<WrapperButton>
						<Button className='card-button' inputColor='#A3A0C2' icon='fas fa-edit'></Button>
						<Button className='card-button' inputColor='#C36C1C' icon='fas fa-trash-alt' onClicked={() => handleDelete(product.id)}></Button>
					</WrapperButton>
				</Wrapper>
			))}
		</>
	)
}

export default CardItem