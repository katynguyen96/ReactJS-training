import styled from 'styled-components'

const StyledWrapper = styled.div`
  width: 240px;
  height: auto;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-top: 1px;
  cursor:pointer;
  border: 1px solid transparent;
  background-color:white;
  &:hover {
    box-shadow: 1px 1px 4px 4px #DDDDDD;
  }
`

export {
  StyledWrapper
}
