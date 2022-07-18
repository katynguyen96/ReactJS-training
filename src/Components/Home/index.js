import {useState} from 'react'
import {Title, Span, Wrapper, Search, ListItem, Line} from './style.js'
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
	  		<Title><Span>m</Span>y<Span>p</Span>roduct</Title>
	  		<SearchBar/>
	  		<Button onClicked={handleShowModal} text='Add new' icon='fas fa-plus-square' ></Button>
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