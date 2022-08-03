import {InputWrapper, SearchInput, SearchButton} from './style.js'

function SearchBar ({handleSearch}) {

	return (
		<InputWrapper>
			<SearchInput placeholder='Search...' onChange={(e) => handleSearch(e.target.value)}/>
			<SearchButton><i className='fas fa-search'></i></SearchButton>
		</InputWrapper>
	)
}
export default SearchBar