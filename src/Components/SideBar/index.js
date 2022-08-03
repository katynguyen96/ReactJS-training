import {Title, Wrapper, BrandName, BrandWrapper, ClearButton} from './style'

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
			<ClearButton onClick={() => handleClearFilter()}>Clear filter</ClearButton>
		</Wrapper>
	)
}
export default SideBar