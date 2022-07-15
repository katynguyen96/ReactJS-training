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

export {
	Wrapper,
	Image,
	ItemInfo,
	Name,
	Info,
}