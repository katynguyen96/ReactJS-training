import { v4 as uuidv4 } from 'uuid'
import {
	SET_PRODUCT_NAME, 
	SET_PRODUCT_PRICE,
	SET_PRODUCT_BRAND,
	SET_PRODUCT_IMAGE,
	ADD_PRODUCT,
	REMOVE_PRODUCT,
	SEARCH_PRODUCT
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
		case SET_PRODUCT_NAME:
			return {
				...state,
				productName: action.payload
			}
		case SET_PRODUCT_PRICE:
			return {
				...state,
				productPrice: action.payload
			}
		case SET_PRODUCT_BRAND:
			return {
				...state,
				productBrand: action.payload
			}
		case SET_PRODUCT_IMAGE:
			return {
				...state,
				productImg: action.payload
			}
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
				isSearchActive: !!action.payload.length > 0 || false,
				foundProduct: state.products.filter(product => product.productName.toLowerCase().search(action.payload.toLowerCase()) !== -1)		
			}
		default:
			throw new Error('Invalid action')
	}
}

export {initState}
export default reducer