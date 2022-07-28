import {Title, Wrapper, BrandName, BrandWrapper, ClearButton} from './style'
import {useStore, actions} from '../../store'

function SideBar () {
	const [state, dispatch] = useStore()

	const handleFilter = (e) => {
		dispatch(actions.filterProduct(e.target.getAttribute('value')))
	}

	const handleClearFilter = () => {
		dispatch(actions.clearFilter())
	}

	const options = [
		{value:'samsung', text:'Samsung'},
		{value:'iphone', text:'Iphone'},
		{value:'vivo', text:'Vivo'},
	]

	return (
		<Wrapper>
			<Title>Filter</Title>
			<Title>Brand</Title>
			<BrandWrapper>
				{options.map(option=>(
						<BrandName key={option.value} value={option.value} onClick={handleFilter}>
							{option.text}
						</BrandName>
					))}
			</BrandWrapper>
			<ClearButton onClick={handleClearFilter}>Clear filter</ClearButton>
		</Wrapper>
	)
}
export default SideBar