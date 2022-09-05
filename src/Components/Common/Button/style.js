import styled from 'styled-components'

export const CommonButton = styled.button`
  &.add {
  font-size: 15px;
  cursor: pointer;
  background-color: var(--color-blue);
  color: var(--color-white);
  border: none;
  border-radius: 10px;
  width: 100px;
  height: 40px;
  &:hover {
    background-color: var(--color-white);
    color: var(--color-blue);
    border: 1px solid var(--color-blue);
  }
};

&.modal-button {
  width: 100px;
  height: 30px;
  border: none;
  font-size: 15px;
  cursor: pointer;
  margin-top: 20px;
  color: var(--color-white);
  font-weight: 400;
  border-radius: 5px;
  background-color: ${props => props.inputColor || "#6c757d"}
}

&.card-button {
  font-size: 22px;
  margin-left: 18px;
  border: none;
  cursor: pointer;
  color: ${props => props.inputColor || "#CCCCCC"};
}

  &.confirm-delete-button {
    margin-left: 5px;
    margin-right:5px;
    cursor: pointer;
    font-weight: 500;
    width: 115px;
    height: 39px;
    border: none;
    color: var(--color-white);
    font-size: 16px;
    background-color: ${props => props.inputColor || "#c1c1c1"};
    border-radius: 5px;
  }
`
