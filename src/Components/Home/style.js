import styled from 'styled-components'

const NavBar = styled.div`
	display: flex;
	width:100%;
	height: 80px;
	background-color: #333333;
	// margin: -8px;
`

const Title = styled.h1`
	text-align: left;
	margin-left: 50px;
	font-size: 28px;
	margin-right: 50px;
	color: #FFF;
	margin-top: 20px;
`

const Image = styled.div`
	align-items: left;
	width: 50px;
	height: 50px;
	border-radius: 50%;
	border: none;
	background-color: #FFF;
	margin-top: 15px;
	position: absolute;
	right: 190px;
`

const Email = styled.p`
	color: #FFF;
	position: absolute;
	right: 40px;
	margin-top: 27px;
`

const Span = styled.span`
	text-transform: uppercase;
`
const Wrapper = styled.div`
	width: 100%;
	margin: auto;
`
const Search = styled.div`
	display: flex;
`

const ListProduct = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-wrap: wrap;
	width: 850px;
	margin-right: 150px;
	margin-left: 250px;
	margin-bottom: 40px;
`
const Line = styled.h2`
	font-size: 22px;
	margin-left: 250px;
	margin-top: 30px;
	font-weight: bold;
`

export {
	NavBar,
	Title,
	Span,
	Wrapper,
	Search,
	ListProduct,
	Line,
	Image,
	Email
}