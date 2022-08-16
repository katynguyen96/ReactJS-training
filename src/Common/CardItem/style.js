import styled from 'styled-components'

const ImageWarapper = styled.div`
	width: 150px;
	height: 150px;
`

const Image = styled.img`
	width: auto;
	height: 100%;
	margin-left: 20px;
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

export {
	Image,
	ItemInfo,
	Name,
	Info,
	WrapperButton,
	ImageWarapper
}