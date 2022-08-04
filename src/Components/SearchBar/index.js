import {InputWrapper, SearchInput} from './style.js'
import Button from '../../Common/Button'

function SearchBar ({handleSearch}) {

	return (
		<InputWrapper>
			<SearchInput placeholder='Search...' onChange={(e) => handleSearch(e.target.value)}/>
			<Button className='search-button' icon='fas fa-search'></Button>
		</InputWrapper>
	)
}
export default SearchBar