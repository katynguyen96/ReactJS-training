import styled from 'styled-components'

const NavBar = styled.div`
	display: flex;
	width: 200%;
	border: 1px solid #BABABA;
	height: 80px;
	background-color: #333333;
`

const Title = styled.h1`
	text-align: left;
	margin-left: 50px;
	font-size: 28px;
	margin-right: 50px;
	color: #FFF;
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

const ListItem = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-wrap: wrap;
	width: 850px;
	margin-right: 150px;
	margin-left: 250px;
	margin-bottom: 40px;
	margin-top: -10px;
`
const Line = styled.h2`
	font-size: 22px;
	margin-left: 250px;
	margin-top: 30px;
`

export {
	NavBar,
	Title,
	Span,
	Wrapper,
	Search,
	ListItem,
	Line,
	Image,
	Email
}