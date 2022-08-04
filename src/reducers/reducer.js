import { v4 as uuidv4 } from 'uuid'
import {
	ADD_PRODUCT,
	REMOVE_PRODUCT,
	SEARCH_PRODUCT,
	FILTER_PRODUCT,
	CLEAR_FILTER
} from '../store/constants'

const initState = {
	products: [],
	id: '',
	productName: '',
	productPrice: '',
	productBrand: '',
	productImg: '',
	isSearchActive:false,
	foundProduct: []
}

function reducer(state, action) {
	switch (action.type) {
		case ADD_PRODUCT:
			return {
				...state,
				products: [...state.products, action.payload],
				id: uuidv4()
			}
		case REMOVE_PRODUCT:
			return {
				...state,
				products: state.products.filter(product => product.id !== action.payload)
			}
		case SEARCH_PRODUCT:
			return {
				...state,
				isSearchActive: !!action.payload.length,
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