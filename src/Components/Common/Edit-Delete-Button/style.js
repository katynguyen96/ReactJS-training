import styled from 'styled-components'

const Wrapper = styled.div`
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
	Button
}