import styled from 'styled-components'

const Wrapper = styled.div`
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	height: 480px;
	width: 560px;
	background: #83BDC9;
`

const Title = styled.p`
	font-size: 25px;
	font-weight: 400;
	text-align: center;
`

const Form = styled.form`
	margin-left: 35px;
`

const Label = styled.p`
	font-size: 15px;
`

const Input = styled.input`
	width: 450px;
	height: 30px;
	border-radius: 5px;
`

const Brand = styled.select`
	width: 90px;
	height: 30px;
	border-radius: 5px;
`
const Value = styled.option`
	
`

const WrapperButton = styled.div`
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
	Form,
	Title,
	Input,
	Label,
	Brand,
	Value,
	WrapperButton,
	Button
}