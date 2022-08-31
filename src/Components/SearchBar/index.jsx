import {
  StyledInputWrapper,
  StyledSearchInput
} from './style.js'
import {useStore, actions} from '../../store'

const SearchBar = () => {
  //get global state
	const [state, dispatch] = useStore()

  //search product function
  const handleSearch = (e) => {
    dispatch(actions.searchProduct(e.target.value))
  }

  return (
    <StyledInputWrapper>
      <StyledSearchInput placeholder='Search...' onChange={handleSearch}/>
    </StyledInputWrapper>
  )
}

export default SearchBar
