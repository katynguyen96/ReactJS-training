import {Title, Wrapper, BrandName, BrandWrapper} from './style'
import Button from '../Common/Button'

const SideBar = ({handleFilter, handleClearFilter}) => {

	const options = [
		{value:'samsung', text:'Samsung'},
		{value:'iphone', text:'Iphone'},
		{value:'vivo', text:'Vivo'},
	]

	//Filter function
	const filterProductBrand = (e) => {
		handleFilter(e.target.getAttribute('value'))
	}

	//clear filter function
	const clearFilter = () => {
		handleClearFilter()
	}

	return (
		<Wrapper>
			<Title>Filter</Title>
			<Title>Brand</Title>
			<BrandWrapper>
				{options.map(option=>(
						<BrandName key={option.value} value={option.value} onClick={filterProductBrand}>
							{option.text}
						</BrandName>
					))}
			</BrandWrapper>
			<Button className='clear-filter-button' text='Clear Filter' onClicked={clearFilter}></Button>
		</Wrapper>
	)
}
export default SideBar