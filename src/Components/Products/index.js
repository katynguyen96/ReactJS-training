import CardItem from '../../Common/CardItem'
import {Wrapper} from './style'
import {useStore} from '../../store'

function Products ({handleDelete}) {
	const [state] = useStore()
	const {isSearchActive, foundProduct, products} = state

	const currentProduct = isSearchActive ? foundProduct : products

	return (
		<>
			{currentProduct.map((product)=>(
				<Wrapper key={product.id} data-key={product.id}>
					<CardItem handleDelete={handleDelete} theProduct={product}/>
				</Wrapper>
			))}
		</>
	)
}

export default Products