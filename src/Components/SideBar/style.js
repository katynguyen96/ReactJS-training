import styled from 'styled-components'

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 220px;
  height: 250px;
  background-color: var(--color-white);
  margin-left: 7px;
  border-right: 1px solid #CCCCCC;
  margin-top: 40px
`

const StyledTitle = styled.p`
  font-size: 14px;
  margin-left: 14px;
  color: var(--color-black);
  text-transform: uppercase;
  margin-top: 15px;
  letter-spacing: 1px;
`

const StyledOptionTitle = styled.p`
  font-size: 14px;
  margin-left: 10px;
  width: 70px;
  color: var(--color-black);
  text-transform: uppercase;
  margin-top: 20px;
  letter-spacing: 1px;
  font-weight: bold;
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
  margin-top: 10px;
  font-size: 16px;
  margin-left: 7px;
  text-transform: capitalize;
  color: var(--color-black);
  letter-spacing: 1px;
  padding: 3px 0 8px;
`;

export {
  StyledTitle,
  StyledWrapper,
  StyledBrandName,
  StyledOptionTitle,
  StyledCheckBox,
  StyledLabel
}
