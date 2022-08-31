import styled from 'styled-components'

const StyledNavBar = styled.div`
  display: flex;
  width:100%;
  height: 80px;
  background-color: var(--color-black);
`

const StyledTitle = styled.h1`
  text-align: left;
  margin-left: 50px;
  font-size: 28px;
  margin-right: 50px;
  color: var(--color-white);
  margin-top: 20px;
`

const StyledImage = styled.img`
  align-items: left;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  // background-color: var(--color-white);
  margin-top: 15px;
  position: absolute;
  right: 190px;
`

const StyledEmail = styled.p`
  color: var(--color-white);
  position: absolute;
  right: 40px;
  margin-top: 30px;
`

const StyledSpan = styled.span`
  text-transform: uppercase;
`
const StyledWrapper = styled.div`
  width: 100%;
  margin: auto;
`
const StyledSearch = styled.div`
  display: flex;
`

const StyledListProduct = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 850px;
  margin-right: 150px;
  margin-left: 250px;
  margin-bottom: 40px;
`
const StyledLine = styled.h2`
  font-size: 22px;
  margin-left: 250px;
  margin-top: 30px;
  font-weight: bold;
`

export {
  StyledNavBar,
  StyledTitle,
  StyledSpan,
  StyledWrapper,
  StyledSearch,
  StyledListProduct,
  StyledLine,
  StyledImage,
  StyledEmail
}
