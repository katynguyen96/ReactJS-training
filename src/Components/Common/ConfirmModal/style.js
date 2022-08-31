import styled from 'styled-components'

const StyledModalWrapper = styled.div`
  background-color: var(--color-blur);
  position: fixed;
  left:0;
  bottom:0;
  right: 0;
  top: 0;
  z-index: 10;
`
 
const StyledModal = styled.div`
  position: fixed;
  width: 400px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #FFF;
  z-index: 9;
  border-radius: 8px;
`

const StyledTitle = styled.p`
  text-align: center;
  font-weight: 400;
  font-size: 28px;
  color: #636363;
  margin-top: 20px;
`

const StyledContent = styled.p`
  text-align: center;
  font-weight: 400;
  font-size: 18px;
  color: #999;
  margin-top: 16px;
`

const StyledButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 25px;
`
const StyledIconBox = styled.div`
  width: 80px;
  height: 80px;
  margin: 0 auto;
  border-radius: 50%;
  z-index: 9;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid var(--color-red);
  color: var(--color-red);
  font-size: 48px;
  margin-top: 20px;
`

export { StyledModalWrapper, StyledModal, StyledTitle, StyledContent, StyledButtonWrapper, StyledIconBox };
