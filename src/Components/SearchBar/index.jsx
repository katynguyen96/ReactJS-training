import {InputWrapper, SearchInput} from './style.js'

function SearchBar ({handleSearch}) {

	const searchProductName = (e) => {
		handleSearch(e.target.value)
	}

	return (
		<InputWrapper>
			<SearchInput placeholder='Search...' onChange={searchProductName}/>
		</InputWrapper>
	)
}
export default SearchBar