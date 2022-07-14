import {InputWrapper, SearchInput, SearchButton} from './style.js'

function SearchBar () {
	return (
		<InputWrapper>
			<SearchInput placeholder='Search...'/>
			<SearchButton><i className='fas fa-search'></i></SearchButton>
		</InputWrapper>
	)
}
export default SearchBar