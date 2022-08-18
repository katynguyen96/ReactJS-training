import {InputWrapper, SearchInput} from './style.js'

function SearchBar ({handleSearch}) {
	return (
		<InputWrapper>
			<SearchInput placeholder='Search...' onChange={(e) => handleSearch(e.target.value)}/>
		</InputWrapper>
	)
}
export default SearchBar