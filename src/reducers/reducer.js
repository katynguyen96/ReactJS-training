import {
	ADD_PRODUCT,
	EDIT_PRODUCT,
	REMOVE_PRODUCT,
	SEARCH_PRODUCT,
	FILTER_PRODUCT,
	CLEAR_FILTER
} from '../constants/constants'

export const initState = {
	products: [],
	isSearchActive:false,
	filterProduct: []
}

const reducer = (state, action) => {
	switch (action.type) {
		case ADD_PRODUCT:
			return {
				...state,
				//add new product into state
				products: [...state.products, action.product],
			}

		case EDIT_PRODUCT:
			const updatedProduct = action.product

			const updatedProducts = state.products.map((product)=>
				//get updated product
				 product.id === updatedProduct.id ? updatedProduct : product
			)

			//add updated product into products
			return {
				...state,
				products: updatedProducts,
			}

		case REMOVE_PRODUCT:
			return {
				...state,
				products: state.products.filter(product => product.id !== action.id)
			}

		case SEARCH_PRODUCT:
			return {
				...state,
				//if search input has value
				isSearchActive: !!action.input.length,
				//create new products to not change the default state
				filterProduct: state.products.filter(product => product.productName.toLowerCase().search(action.input.toLowerCase()) !== -1)		
			}

		case FILTER_PRODUCT:
			return {
				...state,
				isSearchActive: true,
				filterProduct: state.products.filter(product => product.productBrand.toLowerCase().search(action.payload.toLowerCase()) !== -1)		
			}

		case CLEAR_FILTER:
			return {
				...state,
				isSearchActive: false
			}
			
		default:
			return state
	}
}

export default reducer