import styled from 'styled-components'

const Wrapper = styled.div`
	border-radius: 15px;
	width: 200px;
	height: auto;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	margin-left: 80px;
	margin-top: 40px;
	box-shadow: 3px 7px 12px #888888;
`

const ImageWarapper = styled.div`
	width: 150px;
	height: 150px;
`

const Image = styled.img`
	width: 100%;
	height: auto;
	margin-left: 12px;
`

const ItemInfo = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: 15px;
	margin-top: 8px;
`

const Name = styled.p`
	font-size: 20px;
	font-weight: 600;
	margin-top: -5px;
`

const Info = styled.p`
	font-size: 16px;
	margin-top: -10px;
	opacity: ${props => props.brand ? "0.6" : "1"};
	text-transform: capitalize;
`

const WrapperButton = styled.div`
	display: flex;
	margin-bottom: 8px;
	justify-content: space-around;
	margin-left: -15px;
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
	Button,
	ImageWarapper
}