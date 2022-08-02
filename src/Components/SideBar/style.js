import styled from 'styled-components'


const Wrapper = styled.div`
	position: absolute;
	top: 110px;
	display: flex;
	flex-direction: column;
	border: 1px solid #BABABA;
	width: 210px;
	height: 400px;
	background-color: #333333;
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

const ClearButton = styled.button`
	width: 180px;
	height: 30px;
	margin-left: 13px;
	cursor: pointer;
	border-radius: 5px;
	border: none;
	&::before {
		content:'';
		position: absolute;
		left:13px;
		right:17px;
		bottom: 158px;
		height: 2px;
		background-color: #0099FF;
		transition: transform 300ms ease-in-out;
		transform: scaleX(0);
	}

	&:hover::before, &:focus::before {
		transform: scaleX(1);
	}
`

export {
	Title,
	Wrapper,
	BrandName,
	BrandWrapper,
	ClearButton
}