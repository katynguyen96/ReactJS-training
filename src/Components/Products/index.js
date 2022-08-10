import CardItem from '../../Common/CardItem'
import {Wrapper} from './style'
import {useStore, actions} from '../../store'

function Products () {
	const [state, dispatch] = useStore()
	const {isSearchActive, foundProduct, products} = state

	const currentProduct = isSearchActive ? foundProduct : products

	const handleEdit = (product) => {
		dispatch(actions.editProduct(product))
	}

	const handleDelete = (id) => {
		dispatch(actions.removeProduct(id))
	}

	return (
		<>
			{currentProduct.map((product)=>(
				<Wrapper key={product.id}>
					<CardItem handleDelete={handleDelete} theProduct={product} handleEdit={handleEdit}/>
				</Wrapper>
			))}
		</>
	)
}

export default Products