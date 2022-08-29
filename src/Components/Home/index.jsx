import React, {useState} from 'react'
import {useStore, actions} from '../../store'
import {NavBar, Title, Span, Search, ListProduct, Line, Image, Email} from './style.js'
import SearchBar from '../SearchBar'
import SideBar from '../SideBar'
import Button from '../Common/Button'
import Modal from '../Common/Modal'
import Products from '../Products'
import { v4 as uuidv4 } from 'uuid'

const Home = () => {
	const [state, dispatch] = useStore()

	const {isSearchActive, filterProduct, products} = state
	//get currentproduct if search inputs has value get foundProduct (get product when run search and filter function) if not get default products

	const currentProduct = isSearchActive && filterProduct.length>0 ? filterProduct : products

	//set state for show add new product modal function
	const [show, setShow] = useState(false)

	//add new product function
	const handleAdd = (product) => {
			dispatch(actions.addProduct(product, product.id = uuidv4()))
			handleCloseModal()
	}

	const handleEdit = (product) => {
		dispatch(actions.editProduct(product))
	}

	const handleDelete = (id) => {
		dispatch(actions.removeProduct(id))
	}	

	//search product function
	const handleSearch = (text) => {
		dispatch(actions.searchProduct(text))
	}

	//fliter product function
	const handleFilter = (text) => {
		dispatch(actions.filterProduct(text))
	}

	//clear filter function
	const handleClearFilter = () => {
		dispatch(actions.clearFilter())
	}

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
		<Search>
				<NavBar>
	  			<Title><Span>m</Span>y<Span>p</Span>roduct</Title>
	  			<SearchBar handleSearch={handleSearch}/>
	  			<Image/>
	  			<Email>example@gmail.com</Email>
	  		</NavBar>
	  		<Button className='add' onClicked={handleShowModal} text='Add New' icon='fas fa-plus-square' ></Button>
	  		{show && <Modal handleCloseModal={handleCloseModal} isCreated='true' text='Create Product' handleAdd={handleAdd}/>}
	  </Search>
	  <Line>List Product</Line>
	  <ListProduct>
	  	<Products handleDelete={handleDelete} handleEdit={handleEdit} currentProduct={currentProduct}/>
	  </ListProduct>
	  <SideBar handleFilter={handleFilter} handleClearFilter={handleClearFilter}/>
	</>
	)
}

export default Home