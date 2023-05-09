import styled from '@emotion/styled';

export const Wrap = styled.div`
  display: flex;
  gap: 10px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  background-color: rgb(249, 249, 247);
  border: none;
  border-radius: 5px;
  transition: background-color 300ms ease-in-out;

  &:hover {
    background-color: rgb(254, 236, 181);
  }
`;
