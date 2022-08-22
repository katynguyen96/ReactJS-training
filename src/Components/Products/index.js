import CardItem from '../CardItem'
import {Wrapper} from './style'

function Products ({handleDelete, handleEdit, currentProduct}) {
	//edit product function
	const handleEditProduct = (product) => {
		handleEdit(product)
	}

	//delete product function
	const deleteProduct = (id) => {
		handleDelete(id)
	}


	return (
		<>
			{currentProduct.map((product)=>(
				<Wrapper key={product.id}>
					<CardItem handleDelete={deleteProduct} theProduct={product} handleEdit={handleEditProduct}/>
				</Wrapper>
			))}
		</>
	)
}

export default Products