import {
  ADD_PRODUCT,
  EDIT_PRODUCT,
  REMOVE_PRODUCT,
  SEARCH_PRODUCT,
  FILTER_PRODUCT,
  CLEAR_FILTER
} from '../constants/constants'

export const addProduct = product => ({
  type: ADD_PRODUCT,
  product
})

export const editProduct = product => ({
  type: EDIT_PRODUCT,
  product
})

export const removeProduct = id => ({
  type: REMOVE_PRODUCT,
  id
})

export const searchProduct = input => ({
  type: SEARCH_PRODUCT,
  input
})

export const filterProduct = payload => ({
  type: FILTER_PRODUCT,
  payload
})

export const clearFilter = payload => ({
  type: CLEAR_FILTER,
  payload
})

