import styled from 'styled-components'

const ModalWrapper = styled.div`
  background-color: rgb(0 0 0 / 30%);
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 10;
  right: 1px;
  top: 2px;
`;
const Modal = styled.div`
  position: fixed;
  width: 600px;
  height: 300px;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
  background: #83bdc9;
  z-index: 39;
  border-radius: 8px;
`;
const Title = styled.p`
  text-align: center;
  font-weight: 400;
  font-size: 36px;
`;
const Content = styled.p`
  text-align: center;
  font-weight: 400;
  font-size: 30px;
`;
const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 50px;
`;
const Button = styled.button`
  cursor: pointer;
  width: 88px;
  height: 39px;
  border: none;
  font-size: 16px;
  background-color: ${(props) =>
    props.yes ? "rgba(2, 88, 255, 0.54)" : "#CCCCCC"};
  border-radius: 10px;
`;
export { ModalWrapper, Modal, Title, Content, ButtonWrapper, Button };
