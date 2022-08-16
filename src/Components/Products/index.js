import CardItem from '../../Common/CardItem'
import {Wrapper} from './style'
import {useStore, actions} from '../../store'

function Products () {
	const [state, dispatch] = useStore()
	const {isSearchActive, foundProduct, products} = state

	const currentProduct = isSearchActive ? foundProduct : products
	//get currentproduct if search inputs has value get foundProduct (get product when run search and filter function) if not get default products


	//edit product function
	const handleEdit = (product) => {
		dispatch(actions.editProduct(product))
	}

	//edit product function
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