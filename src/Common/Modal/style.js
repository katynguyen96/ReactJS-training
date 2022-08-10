import styled from 'styled-components'

const ModalWrapper = styled.div`
  background-color: rgb(0 0 0 / 30%);
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

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
	margin-right: 30px;
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