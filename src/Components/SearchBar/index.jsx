import {useState} from 'react'
import {
  StyledInputWrapper,
  StyledSearchInput,
  StyledSearchButton,
  StyledButtonContent
} from './style.js'
import {useStore, actions} from '../../store'

const SearchBar = () => {
  //get global state
	const [state, dispatch] = useStore()
  const [input, setInput] = useState("")
  //search product function
  const handleSearch = (e) => {
    dispatch(actions.searchProduct(input))
  }

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  return (
    <StyledInputWrapper>
      <StyledSearchInput placeholder="Search..." onChange={handleChange}/>
      <StyledSearchButton onClick={handleSearch}><StyledButtonContent>Search</StyledButtonContent></StyledSearchButton>
    </StyledInputWrapper>
  )
}

export default SearchBar
