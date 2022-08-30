import React, {useState} from 'react'
import {useStore} from '../../store'
import {
  StyledNavBar,
  StyledTitle,
  StyledSpan,
  StyledSearch,
  StyledListProduct,
  StyledLine,
  StyledImage,
  StyledEmail
} from './style.js'
import SearchBar from '../SearchBar'
import SideBar from '../SideBar'
import Button from '../Common/Button'
import Modal from '../Common/Modal'
import Products from '../Products'

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
    <>
      <StyledSearch>
          <StyledNavBar>
            <StyledTitle><StyledSpan>m</StyledSpan>y<StyledSpan>p</StyledSpan>roduct</StyledTitle>
            <SearchBar/>
            <StyledImage/>
            <StyledEmail>example@gmail.com</StyledEmail>
          </StyledNavBar>
          <Button className='add' onClicked={handleShowModal} text='Add New' icon='fas fa-plus-square' ></Button>
          {show && <Modal onCloseModal={handleCloseModal} isCreated='true' text='Create Product'/>}
      </StyledSearch>
      <StyledLine>List Product</StyledLine>
      <StyledListProduct>
        <Products currentProduct={currentProduct}/>
      </StyledListProduct>
      <SideBar/>
    </>
  )
}

export default Home
