import {
	ADD_PRODUCT,
	EDIT_PRODUCT,
	REMOVE_PRODUCT,
	SEARCH_PRODUCT,
	FILTER_PRODUCT,
	CLEAR_FILTER
} from '../store/constants'

const initState = {
	products: [],
	isSearchActive:false,
	foundProduct: []
}

function reducer(state, action) {
	switch (action.type) {
		case ADD_PRODUCT:
			return {
				...state,
				//add new product into state
				products: [...state.products, action.payload],
			}

		case EDIT_PRODUCT:
			const updatedProduct = action.payload

			const updatedProducts = state.products.map((product)=>{
				//get updated product
				if(product.id === updatedProduct.id){
					return updatedProduct
				}
				return product
			})

			//add updated product into products
			return {
				...state,
				products: updatedProducts,
			}

		case REMOVE_PRODUCT:
			return {
				...state,
				products: state.products.filter(product => product.id !== action.payload)
			}

		case SEARCH_PRODUCT:
			return {
				...state,
				//if search input has value
				isSearchActive: !!action.payload.length,
				//create new products to not change the default state
				foundProduct: state.products.filter(product => product.productName.toLowerCase().search(action.payload.toLowerCase()) !== -1)		
			}

		case FILTER_PRODUCT:
			return {
				...state,
				isSearchActive: true,
				foundProduct: state.products.filter(product => product.productBrand.toLowerCase().search(action.payload.toLowerCase()) !== -1)		
			}

		case CLEAR_FILTER:
			return {
				...state,
				isSearchActive: false
			}
			
		default:
			throw new Error('Invalid action')
	}
}

export {initState}
export default reducer