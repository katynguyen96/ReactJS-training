import styled from 'styled-components'

const ModalWrapper = styled.div`
  background-color: rgb(0 0 0 / 30%);
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

const Wrapper = styled.div`
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	height: 460px;
	width: 560px;
	background: #FFF;
	border-radius: 5px;
`

const Title = styled.p`
	font-size: 26px;
	font-weight: 500;
	text-align: center;
`

const Form = styled.form`
	margin-left: 35px;
`

const Label = styled.p`
	font-size: 16px;
	margin-bottom: 8px;
`

const Input = styled.input`
	width: 450px;
	height: 30px;
	border: 1px solid #ced4da;
	border-radius: 5px;
	transition: ease-in-out 0.3s;
	&:focus {
		outline: none;
		border: 1px solid #33CCFF;
		box-shadow: 0 0 10px #719ECE
	}
`

const Brand = styled.select`
	width: 120px;
	height: 30px;
	border-radius: 5px;
`
const Value = styled.option`
	
`

const WrapperButton = styled.div`
	display: flex;
	justify-content: space-around;
	margin-top: 25px;
	border-top: 1px solid #ced4da;
`

export {
	ModalWrapper,
	Wrapper,
	Form,
	Title,
	Input,
	Label,
	Brand,
	Value,
	WrapperButton
}