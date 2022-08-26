import {InputWrapper, SearchInput} from './style.js'

const SearchBar = ({handleSearch}) => {

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