import styled from 'styled-components'


const Wrapper = styled.div`
	position: absolute;
	top: 110px;
	display: flex;
	flex-direction: column;
	width: 210px;
	height: 400px;
	background-color: #333333;
	margin-left: -8px;
`

const Title = styled.p`
	font-size: 18px;
	margin-left: 14px;
	color: #FFFFFF;
	text-transform: uppercase;
`

const OptionTitle = styled.p`
	font-size: 14px;
	margin-left: 35px;
	width: 70px;
	color: #FFFFFF;
	text-transform: uppercase;
	margin-top: -5px;
`

const BrandName = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  margin-top: -10px;
  margin-bottom: 30px;
`;


const CheckBox = styled.input`
  border-radius: 5px;
  cursor: pointer;
`;
const Label = styled.label`
  font-size: 13px;
  width: 120px;
  border-radius: 15px;
  text-transform: uppercase;
  padding-top: 9px;
  padding-left: 26px;
  color: #FFF;
`;

export {
	Title,
	Wrapper,
	BrandName,
	OptionTitle,
	CheckBox,
	Label
}