import {Title, Wrapper, BrandName, BrandWrapper} from './style'
import Button from '../Common/Button'

function SideBar ({handleFilter, handleClearFilter}) {

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
						<BrandName key={option.value} value={option.value} onClick={(e) => handleFilter(e.target.getAttribute('value'))}>
							{option.text}
						</BrandName>
					))}
			</BrandWrapper>
			<Button className='clear-filter-button' text='Clear Filter' onClicked={() => handleClearFilter()}></Button>
		</Wrapper>
	)
}
export default SideBar