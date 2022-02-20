import styled from 'styled-components';

export const ButtonStyled = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  transition: 500ms;
  &:hover {
    color: white;
    background-color: palevioletred;
    cursor: pointer;
  }
`;
