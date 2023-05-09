import styled from '@emotion/styled';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1200;
`;

export const ModalContent = styled.div`
  padding: 50px;
  background-color: rgb(249, 249, 247);
  border-radius: 5px;

  > p {
    margin-bottom: 30px;
  }
`;

export const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;

  > button {
    padding: 5px 20px;
    border: none;
    border-radius: 5px;
    transition: background-color 300ms ease-in-out;

    &:hover {
      background-color: rgb(254, 236, 181);
    }
  }
`;
