import styled from 'styled-components'

const StyledNavBar = styled.div`
  display: flex;
  width:100%;
  height: 100px;
  background-color: rgb(26, 148, 255);
`

const StyledWrapperPage = styled.div`
  background-color: #EEEEEE;
  width: 100%;
`

const StyledTitle = styled.h1`
  text-align: left;
  margin-left: 50px;
  font-size: 28px;
  margin-right: 50px;
  color: var(--color-white);
  margin-top: 30px;
`

const StyledImage = styled.img`
  align-items: left;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  margin-top: 15px;
  position: absolute;
  right: 190px;
`

const StyledEmail = styled.p`
  color: var(--color-white);
  margin-top: 7px;
  margin-left: 10px;
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
  width: 1050px;
  margin: 40px 0 40px 0px;
`
const StyledLine = styled.h2`
  font-size: 22px;
  font-weight: bold;
`
const StyledUserIcon = styled.div`
  margin-left: 20px;
  margin-top: 28px;
  color:white;
  font-size:31px;
`
const StyledAccount = styled.div`
  display:flex;
  flex-direction:column;
  margin-top: 18px;
  font-size:13px;
`

const StyledShoppingCart = styled.div`
  font-size: 27px;
  color:white;
  cursor:pointer;
`

const StyledShoppingTitle = styled.p`
  font-size: 13px;
  color: white;
  margin-left: 10px;
  margin-top: 15px;
`

const StyledShopping = styled.div`
  display: flex;
  margin-top: 30px;
  margin-left: 55px;
`

const CartWrapper = styled.div`
  display:flex;
  position:relative;
`
const UserItem = styled.span`
  color: rgb(36, 36, 36);
  background: rgb(253, 216, 53);
  height: 20px;
  left: 20px;
  top: -9px;
  border-radius: 40px;
  display: inline-block;
  text-align: center;
  line-height: 20px;
  font-size: 13px;
  font-weight: 500;
  position: absolute;
  padding: 0px 7px;
`

const StyledBarWrapper = styled.div`
  display: flex;
  margin-left: 40px;
`

const StyledWrapperAddButton = styled.div`
  display: flex;
  margin-left: 270px;
  justify-content: space-between;
  margin-right: 60px;
  margin-top: 40px;
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
  StyledEmail,
  StyledUserIcon,
  StyledAccount,
  StyledShoppingCart,
  StyledShopping,
  StyledShoppingTitle,
  CartWrapper,
  UserItem,
  StyledWrapperPage,
  StyledBarWrapper,
  StyledWrapperAddButton
}
