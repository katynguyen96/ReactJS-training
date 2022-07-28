import {
	SET_PRODUCT_NAME, 
	SET_PRODUCT_PRICE,
	SET_PRODUCT_BRAND,
	SET_PRODUCT_IMAGE,
	ADD_PRODUCT,
	REMOVE_PRODUCT,
	SEARCH_PRODUCT,
	FILTER_PRODUCT,
	CLEAR_FILTER
} from '../store/constants'

export const setProductName = payload => ({
	type: SET_PRODUCT_NAME,
	payload
})

export const setProductPrice = payload => ({
	type: SET_PRODUCT_PRICE,
	payload
})

export const setProductBrand = payload => ({
	type: SET_PRODUCT_BRAND,
	payload
})

export const setProductImage = payload => ({
	type: SET_PRODUCT_IMAGE,
	payload
})

export const addProduct = payload => ({
	type: ADD_PRODUCT,
	payload
})

export const removeProduct = payload => ({
	type: REMOVE_PRODUCT,
	payload
})

export const searchProduct = payload => ({
	type: SEARCH_PRODUCT,
	payload
})

export const filterProduct = payload => ({
	type: FILTER_PRODUCT,
	payload
})

export const clearFilter = payload => ({
	type: CLEAR_FILTER,
	payload
})

