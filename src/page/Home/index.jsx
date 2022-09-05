import React, {useState} from 'react'
import {useStore} from '../../store'
import {
  StyledNavBar,
  StyledTitle,
  StyledSearch,
  StyledListProduct,
  StyledLine,
  StyledEmail,
  StyledUserIcon,
  StyledAccount,
  StyledShoppingCart,
  StyledShopping,
  StyledShoppingTitle,
  CartWrapper,
  UserItem,
  StyledWrapperPage,
  StyledBarWrapper,
  StyledWrapperAddButton
} from './style.js'
import SearchBar from '../../components/SearchBar'
import SideBar from '../../components/SideBar'
import Button from '../../components/Common/Button'
import Modal from '../../components/Common/Modal'
import Products from '../../components/Products'

const Home = () => {
  //import global state
  const [state] = useStore()

  const {isSearchActive, filterProduct, products} = state

  //get currentproduct if search inputs has value get foundProduct (get product when run search and filter function) if not get default product
  const currentProduct = isSearchActive && filterProduct.length > 0 ? filterProduct : products

  //set state for show add new product modal function
  const [show, setShow] = useState(false)

  //show add new modal function
  const handleShowModal = () => {
    setShow(true)
  }

  //close add new modal function
  const handleCloseModal = () => {
    setShow(false)
  } 

  return (
    <StyledWrapperPage>
      <StyledSearch>
          <StyledNavBar>
            <StyledTitle>PhoneShop</StyledTitle>
            <SearchBar />
            <StyledUserIcon><i class="fas fa-user"></i></StyledUserIcon>
            <StyledAccount>
              <StyledEmail>Login/Logout</StyledEmail>
              <StyledEmail>Account</StyledEmail>
            </StyledAccount>
            <StyledShopping>
              <CartWrapper>
                <StyledShoppingCart><i class="fas fa-cart-shopping"></i></StyledShoppingCart>
                <UserItem>0</UserItem>
              </CartWrapper >
              <StyledShoppingTitle>Shopping Cart</StyledShoppingTitle>
            </StyledShopping>
          </StyledNavBar>
      </StyledSearch>
      <StyledWrapperAddButton>
      <StyledLine>List Product</StyledLine>
        <Button 
            className="add" 
            onClicked={handleShowModal} 
            text="Add New" icon="fas fa-plus-square" 
          />
          {show && 
            <Modal 
              onCloseModal={handleCloseModal} 
              isCreated="true" 
              text="Create Product"
          />}
      </StyledWrapperAddButton>
      <StyledBarWrapper>
        <SideBar />
        <StyledListProduct>
          <Products currentProduct={currentProduct}/>
        </StyledListProduct>
      </StyledBarWrapper>
    </StyledWrapperPage>
  )
}

export default Home
