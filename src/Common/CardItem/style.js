import styled from 'styled-components'

const Wrapper = styled.div`
	width: 300px;
	height: auto;
	display: flex;
	flex-wrap: wrap;
	margin-left: 15px;
`

const Image = styled.img`
	width: 150px;
`

const ItemInfo = styled.div`
	display: flex;
	flex-direction: column;
`

const Name = styled.p`
	font-size: 20px;
	font-weight: 500;
`

const Info = styled.p`
	font-size: 16px;
`

const WrapperButton = styled.div`
	margin-top: 14px;
	display: flex;
	justify-content: space-between;
	margin-left: 15px;
`

const Button = styled.button`
	font-size: 22px;
	margin-left: 18px;
	border: none;
	cursor: pointer;
	color: ${props => props.edit ? "#A3A0C2" : "#C36C1C"};
`

export {
	Wrapper,
	Image,
	ItemInfo,
	Name,
	Info,
	WrapperButton,
	Button
}