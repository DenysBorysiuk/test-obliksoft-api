import styled from '@emotion/styled';

export const Item = styled.li`
  margin-bottom: 5px;
  padding: 10px 10px;
  cursor: pointer;
  background-color: ${({ activeNote, id }) =>
    activeNote === id ? 'rgb(254, 236, 181)' : 'rgb(249, 249, 247)'};
  border-radius: 5px;
  transition: background-color 300ms ease-in-out;

  &:hover {
    background-color: rgb(254, 236, 181);
  }

  @media (min-width: 1280px) {
    padding: 10px 20px;
  }

  @media (min-width: 1680px) {
    padding: 20px 40px;
  }

> p {
    font-size: 12px;
    font-weight: 700;
    margin-bottom: 4px;

    @media (min-width: 1280px) {
      font-size: 14px;
    }

    @media (min-width: 1680px) {
      font-size: 20px;
    } 
`;

export const ModifiedDate = styled.span`
    font-size: 10px;

    @media (min-width: 1280px) {
      font-size: 14px;
    }

    @media (min-width: 1680px) {
      font-size: 16px;
    }
  }
`;
