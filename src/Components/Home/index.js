import {useState} from 'react'
import {useStore, actions} from '../../store'
import {NavBar, Title, Span, Wrapper, Search, ListItem, Line, Image, Email} from './style.js'
import SearchBar from '../SearchBar'
import SideBar from '../SideBar'
import Button from '../../Common/Button'
import CardItem from '../../Common/CardItem'
import Modal from '../../Common/Modal'

function Home () {
	const [state, dispatch] = useStore()
	// const {products, productName, productPrice, productBrand, productImg} = state

	const [show, setShow] = useState(false)

	const handleAdd = (product) => {
		if(product.productName && product.productPrice && product.productImg && product.productBrand) {
			dispatch(actions.addProduct(product))
		}
		else {
			alert("Please fill all the field")
		}
	}

	const handleDelete = (id) => {
		dispatch(actions.removeProduct(id))
	}

	const handleSearch = (text) => {
		dispatch(actions.searchProduct(text))
	}

	const handleFilter = (text) => {
		dispatch(actions.filterProduct(text))
	}

	const handleClearFilter = () => {
		dispatch(actions.clearFilter())
	}

	const handleShowModal = () => {
		setShow(!show)
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
	  		<Button onClicked={handleShowModal} text='Add New' icon='fas fa-plus-square' ></Button>
	  		{show && <Modal text='Create Product' handleAdd={handleAdd}/>}
	  </Search>
	  <Line>List Product</Line>
	  <ListItem>
	  	<CardItem handleDelete={handleDelete}/>
	  </ListItem>
	  <SideBar handleFilter={handleFilter} handleClearFilter={handleClearFilter}/>
	</Wrapper>
	)
}

export default Home