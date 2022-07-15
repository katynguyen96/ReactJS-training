import styled from 'styled-components'

const Wrapper = styled.div`
	display: flex;
	justify-content: space-around;
	margin-top: 25px;
	margin-right: 30px;
`

const Button = styled.button`
	width: 100px;
	height: 30px;
	border: none;
	font-size: 15px;
	cursor: pointer;
	background-color: ${props => props.save ? "rgba(2, 88, 255, 0.54)" : "#CCCCCC"}
`

export {
	Wrapper,
	Button
}