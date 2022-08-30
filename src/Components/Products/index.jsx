import CardProduct from '../CardProduct'
import {StyledWrapper} from './style'

const Products = ({onDelete, onUpdate, currentProduct}) => {
  //edit product function
  const handleEditProduct = (product) => {
    onUpdate(product)
  }

  //delete product function
  const deleteProduct = (id) => {
    onDelete(id)
  }

  return (
    <>
      {currentProduct.map((product)=>(
        <StyledWrapper key={product.id}>
          <CardProduct onDelete={deleteProduct} theProduct={product} onUpdate={handleEditProduct}/>
        </StyledWrapper>
      ))}
    </>
  )
}

export default Products
