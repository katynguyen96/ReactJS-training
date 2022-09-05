import styled from 'styled-components'

const StyledInputWrapper = styled.div`
  display: flex;
  margin-top: 23px;
  margin-left: 30px;
`

const StyledSearchInput = styled.input`
  width: 600px;
  height: 40px;
  border-radius: 5px;
  border: 0px;
  padding: 0px 12px;
  font-size: 13px;
  border-radius: 2px 0px 0px 2px;
  outline: none;
  border:0px;
`

const StyledSearchButton = styled.button`
	border: 0px;
	width:120px;
	height: 40px;
	background: rgb(13, 92, 182);
	border-radius: 0px 2px 2px 0px;
	color: white;
	font-size: 13px;
  font-weight: 500;
  outline: none;
  display: flex;
  cursor: pointer;
  align-items:center;
  justify-content:center;
`

const StyledButtonContent = styled.p`
	
`

export {
  StyledInputWrapper,
  StyledSearchInput,
  StyledSearchButton,
  StyledButtonContent
}
