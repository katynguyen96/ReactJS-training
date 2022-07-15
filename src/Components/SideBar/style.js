import styled from 'styled-components'


const Wrapper = styled.div`
	position: absolute;
	top: 110px;
	display: flex;
	flex-direction: column;
`
const BrandWrapper = styled.div`
	margin-left: 55px;
	margin-top: -20px;
	width: 70px;
`

const Title = styled.p`
	font-size: 20px;
	margin-left: 20px;
	margin-top: -5px;
	width: 70px;
`
const BrandName = styled.p`
	cursor: pointer;
	width: 20px;
`

export {
	Title,
	Wrapper,
	BrandName,
	BrandWrapper
}