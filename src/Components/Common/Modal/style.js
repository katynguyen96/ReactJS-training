import styled from 'styled-components'

const StyledModalWrapper = styled.div`
  background-color: rgb(0 0 0 / 30%);
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`
 
const StyledWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 540px;
  background: #FFF;
  border-radius: 5px;
`

const StyledTitle = styled.p`
  font-size: 26px;
  font-weight: 500;
  text-align: center;
  margin-top: 15px;
`

const StyledForm = styled.form`
  margin-left: 35px;
  margin-top: 10px;
`

const StyledLabel = styled.p`
  font-size: 16px;
  margin-bottom: 8px;
  margin-top: 20px;
`

const StyledInput = styled.input`
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

const StyledBrand = styled.select`
  width: 120px;
  height: 30px;
  border-radius: 5px;
`
const StyledValue = styled.option`
  
`

const StyledWrapperButton = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 25px;
  border-top: 1px solid #ced4da;
  margin-bottom: 20px;
`

const StyledMessage = styled.p`
  color: red;
  font-size: 14px;
  margin-top: 5px;
`

export {
  StyledModalWrapper,
  StyledWrapper,
  StyledForm,
  StyledTitle,
  StyledInput,
  StyledLabel,
  StyledBrand,
  StyledValue,
  StyledWrapperButton,
  StyledMessage
}
