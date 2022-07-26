import {
	SET_PRODUCT_NAME, 
	SET_PRODUCT_PRICE,
	SET_PRODUCT_BRAND,
	SET_PRODUCT_IMAGE,
	ADD_PRODUCT,
	REMOVE_PRODUCT
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

