import {
	SET_PRODUCT_NAME, 
	SET_PRODUCT_PRICE,
	SET_PRODUCT_BRAND,
	SET_PRODUCT_IMAGE,
	ADD_PRODUCT
} from '../store/constants'

const initState = {
	products: [],
	productName: '',
	productPrice: '',
	productBrand: '',
	productImg: '',
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
				products: [...state.products, action.payload]
			}
		default:
			throw new Error('Invalid action')
	}
}

export {initState}
export default reducer