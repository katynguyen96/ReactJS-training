import styled from 'styled-components'

const Title = styled.h1`
	text-align: left;
	margin-left: 50px;
	font-size: 28px;
	margin-right: 50px;
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
	justify-content: space-between;
	flex-wrap: wrap;
	width: 850px;
	margin-top: 40px;
	margin-right: 150px;
	margin-left: 260px;
`
const Line = styled.h2`
	font-size: 22px;
	margin-left: 250px;
	margin-top: -20px;
`

export {
	Title,
	Span,
	Wrapper,
	Search,
	ListItem,
	Line
}