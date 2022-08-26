import CardProduct from '../CardProduct'
import {Wrapper} from './style'

const Products = ({handleDelete, handleEdit, currentProduct}) => {
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
					<CardProduct handleDelete={deleteProduct} theProduct={product} handleEdit={handleEditProduct}/>
				</Wrapper>
			))}
		</>
	)
}

export default Products