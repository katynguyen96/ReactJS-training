import styled from 'styled-components'

const StyledWrapper = styled.div`
  position: absolute;
  top: 110px;
  display: flex;
  flex-direction: column;
  width: 210px;
  height: 250px;
  background-color: var(--color-black);
  border-radius: 5px;
  margin-left: 7px;
`

const StyledTitle = styled.p`
  font-size: 14px;
  margin-left: 14px;
  color: var(--color-white);
  text-transform: uppercase;
  margin-top: 15px;
  letter-spacing: 1px;
`

const StyledOptionTitle = styled.p`
  font-size: 14px;
  margin-left: 35px;
  width: 70px;
  color: var(--color-white);
  text-transform: uppercase;
  margin-top: 20px;
  letter-spacing: 1px;
`

const StyledBrandName = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  margin-bottom: 30px;
`;


const StyledCheckBox = styled.input`
  cursor: pointer;
`;

const StyledLabel = styled.label`
  font-size: 13px;
  border-radius: 15px;
  text-transform: uppercase;
  margin-top: 9px;
  margin-left: 50px;
  color: var(--color-white);
  letter-spacing: 1px;
`;

export {
  StyledTitle,
  StyledWrapper,
  StyledBrandName,
  StyledOptionTitle,
  StyledCheckBox,
  StyledLabel
}
