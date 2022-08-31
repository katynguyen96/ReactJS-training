import styled from 'styled-components'
 
const StyledImageWarapper = styled.div`
  width: 150px;
  height: 150px;
`

const StyledImage = styled.img`
  width: auto;
  height: 100%;
  margin-left: 20px;
  margin-top: 5px;
`

const StyledItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  margin-top: 10px;
`

const StyledName = styled.p`
  font-size: 20px;
  font-weight: 600;
  margin-top: 8px;
  margin-bottom: 10px;
`

const StyledInfo = styled.p`
  font-size: 17px;
  opacity: ${props => props.brand ? "0.6" : "1"};
  text-transform: capitalize;
  color: ${props => props.price ? "red" : "black" };
  font-weight: ${props => props.bold ? "600" : "400"};
`

const StyledWrapperButton = styled.div`
  display: flex;
  margin-bottom: 8px;
  justify-content: space-around;
  margin-left: -15px;
  margin-top: 15px;
`

export {
  StyledImage,
  StyledItemInfo,
  StyledName,
  StyledInfo,
  StyledWrapperButton,
  StyledImageWarapper
}
