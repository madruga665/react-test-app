import styled from "styled-components";
import { Colors } from "../../styles/variables";

export const ButtonStyled = styled.button`
  color: ${Colors.primaryBlue};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid ${Colors.primaryBlue};
  border-radius: 3px;
  transition: 500ms;
  &:hover {
    color: white;
    background-color: ${Colors.primaryBlue};
    cursor: pointer;
  }
`;
