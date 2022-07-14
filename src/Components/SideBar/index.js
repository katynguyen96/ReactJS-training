import {Title, Wrapper, BrandName, BrandWrapper} from './style'

function SideBar () {
	return (
		<Wrapper>
			<Title>Filter</Title>
			<Title>Brand</Title>
			<BrandWrapper>
				<BrandName>Iphone</BrandName>
				<BrandName>Samsung</BrandName>
				<BrandName>Vivo</BrandName>
			</BrandWrapper>
		</Wrapper>
	)
}
export default SideBar