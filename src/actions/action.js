import {
	ADD_PRODUCT,
	REMOVE_PRODUCT,
	SEARCH_PRODUCT,
	FILTER_PRODUCT,
	CLEAR_FILTER
} from '../store/constants'

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

