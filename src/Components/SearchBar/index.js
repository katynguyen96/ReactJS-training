import {InputWrapper, SearchInput, SearchButton} from './style.js'
import {useStore, actions} from '../../store'

function SearchBar () {
	const [state, dispatch] = useStore()

	const handleSearch = (e) => {
		dispatch(actions.searchProduct(e.target.value))
	}

	return (
		<InputWrapper>
			<SearchInput placeholder='Search...' onChange={handleSearch}/>
			<SearchButton><i className='fas fa-search'></i></SearchButton>
		</InputWrapper>
	)
}
export default SearchBar