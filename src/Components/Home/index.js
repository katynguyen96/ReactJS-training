import {Title, Span, Wrapper, Search, ListItem, Line} from './style.js'
import SearchBar from '../SearchBar'
import SideBar from '../SideBar'
import AddButton from '../AddButton'

function Home () {
	return (
	<Wrapper>
		<Search>
	  		<Title><Span>m</Span>y<Span>p</Span>roduct</Title>
	  		<SearchBar/>
	  		<AddButton/>
	  	</Search>
	  	<Line>List Product</Line>
	  	<ListItem>
	  		<h2>Item</h2>
	  		<h2>Item</h2>
	  		<h2>Item</h2>
	  		<h2>Item</h2>
	  	</ListItem>
	  	<SideBar/>

	</Wrapper>
	)
}

export default Home