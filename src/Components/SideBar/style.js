import styled from 'styled-components'


const Wrapper = styled.div`
	position: absolute;
	top: 110px;
	display: flex;
	flex-direction: column;
	width: 210px;
	height: 400px;
	background-color: #333333;
	margin-left: -8px;
`

const BrandWrapper = styled.div`
	margin-left: 55px;
	margin-top: -20px;
	width: 70px;
`

const Title = styled.p`
	font-size: 18px;
	margin-left: 20px;
	width: 70px;
	color: #FFFFFF;
	text-transform: uppercase;
`
const BrandName = styled.p`
	cursor: pointer;
	width: 20px;
	color: #FFFFFF;
	&:hover {
		color: #FF7129;
	}
`

export {
	Title,
	Wrapper,
	BrandName,
	BrandWrapper
}