import {useState} from 'react'
import {useStore, actions} from '../../store'
import {NavBar, Title, Span, Wrapper, Search, ListItem, Line, Image, Email} from './style.js'
import SearchBar from '../SearchBar'
import SideBar from '../SideBar'
import Button from '../../Common/Button'
import Modal from '../../Common/Modal'
import Products from '../Products'
import { v4 as uuidv4 } from 'uuid'

function Home () {
	const [state, dispatch] = useStore()

	//set state for show add new product modal function
	const [show, setShow] = useState(false)

	//add new product function
	const handleAdd = (product) => {
			dispatch(actions.addProduct(product, product.id = uuidv4()))
			handleCloseModal()
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
	<Wrapper>
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
	  <ListItem>
	  	<Products/>
	  </ListItem>
	  <SideBar handleFilter={handleFilter} handleClearFilter={handleClearFilter}/>
	</Wrapper>
	)
}

export default Home