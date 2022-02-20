import styled from "styled-components";
import { Colors } from "../../styles/variables";

export const InputContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-start;
  margin-bottom: 1.5rem;
`;

export const InputStyled = styled.input` 
  width: 90%;
  padding: 0.5rem;
  border: none;
  background-color: transparent;
  border-bottom: 2px solid #ccc;
  font-size: 1rem;
  color: #333;
  transition: 500ms;
  color: ${Colors.primaryBlue};

  &::placeholder {
    color: transparent
  }

  &:focus {
    outline: none;
    border-color: ${Colors.primaryBlue};
  }
`;

export const LabelStyled = styled.label`
  font-size: 1.2rem;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 500ms;
  
  ${InputStyled}:focus ~ &, input:not(:placeholder-shown) ~ & {
    top: -18px;
    font-size: 14px;
    color: ${Colors.primaryBlue};
  }
`;
