import {useState} from 'react'
import {NavBar, Title, Span, Wrapper, Search, ListItem, Line, Image, Email} from './style.js'
import SearchBar from '../SearchBar'
import SideBar from '../SideBar'
import Button from '../../Common/Button'
import CardItem from '../../Common/CardItem'
import Modal from '../../Common/Modal'

function Home () {
	const [show, setShow] = useState(false)

	const handleShowModal = () => {
		setShow(!show)
	} 

	return (
	<Wrapper>
		<Search>
				<NavBar>
	  			<Title><Span>m</Span>y<Span>p</Span>roduct</Title>
	  			<SearchBar/>
	  			<Image/>
	  			<Email>example@gmail.com</Email>
	  		</NavBar>
	  		<Button onClicked={handleShowModal} text='Add New' icon='fas fa-plus-square' ></Button>
	  		{show && <Modal text='Create Product'/>}
	  </Search>
	  <Line>List Product</Line>
	  <ListItem>
	  	<CardItem/>
	  </ListItem>
	  <SideBar/>
	</Wrapper>
	)
}

export default Home