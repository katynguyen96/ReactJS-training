import styled from 'styled-components'

const ModalWrapper = styled.div`
  background-color: rgb(0 0 0 / 30%);
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 10;
  right: 0;
  top: 0;
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

export { ModalWrapper, Modal, Title, Content, ButtonWrapper };
