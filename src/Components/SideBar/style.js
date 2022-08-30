import styled from 'styled-components'


const Wrapper = styled.div`
	position: absolute;
	top: 110px;
	display: flex;
	flex-direction: column;
	width: 210px;
	height: 400px;
	background-color: #333333;
`

const Title = styled.p`
	font-size: 18px;
	margin-left: 14px;
	color: #FFFFFF;
	text-transform: uppercase;
	margin-top: 15px;
	letter-spacing: 1px;
`

const OptionTitle = styled.p`
	font-size: 14px;
	margin-left: 35px;
	width: 70px;
	color: #FFFFFF;
	text-transform: uppercase;
	margin-top: 20px;
	letter-spacing: 1px;
`

const BrandName = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  margin-bottom: 30px;
`;


const CheckBox = styled.input`
  border-radius: 5px;
  cursor: pointer;
`;
const Label = styled.label`
  font-size: 13px;
  border-radius: 15px;
  text-transform: uppercase;
  margin-top: 9px;
  margin-left: 50px;
  color: #FFF;
  letter-spacing: 1px;
`;

export {
	Title,
	Wrapper,
	BrandName,
	OptionTitle,
	CheckBox,
	Label
}