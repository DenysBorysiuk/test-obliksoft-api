import styled from '@emotion/styled';

export const Wrap = styled.div`
  width: 75%;
  height: calc(100vh - 130px);
  background-color: rgb(249, 249, 247);
  border-radius: 5px;
  padding: 20px;
  overflow: hidden;
`;

export const Time = styled.p`
  text-align: center;
  margin-bottom: 20px;
`;

export const Text = styled.textarea`
  display: block;
  width: 100%;
  height: calc(100vh - 170px);
  font-size: 16px;
  resize: none;
  background-color: transparent;
  border: none;
  outline: none;
`;
