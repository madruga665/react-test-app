
import styled from "styled-components";

export const ButtonStyled = styled.button`
  color: ${props => props.theme.colors.primaryBlue};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid ${props => props.theme.colors.primaryBlue};
  border-radius: 3px;
  transition: 500ms;
  &:hover {
    color: white;
    background-color: ${props => props.theme.colors.primaryBlue};
    cursor: pointer;
  }
`;
