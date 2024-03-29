import {
  ADD_PRODUCT,
  EDIT_PRODUCT,
  REMOVE_PRODUCT,
  SEARCH_PRODUCT,
  FILTER_PRODUCT,
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
        filterProduct: state.products.filter(product => product.productName.toLowerCase().search(action.input.toLowerCase().trim()) !== -1)    
      }

    case FILTER_PRODUCT:
      const listChecked = action.payload;
      // check includes brand is true,then filter items
      const filterList = state.products.filter((item) =>
        listChecked.includes(item.productBrand)
      );
      return {
        ...state,
        isSearchActive: true,
        filterProduct: filterList
      }
      
    default:
      return state
  }
}

export default reducer
