import NumberFormat from 'react-number-format';
import styled from 'styled-components';
import { Colors } from '../../styles/variables';

export const InputContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  margin-bottom: 1.5rem;
`;

export const NumberFormatStyled = styled(NumberFormat)`
  width: 90%;
  padding: 0.5rem;
  border: none;
  background-color: transparent;
  border-bottom: 2px solid;
  font-size: 1rem;
  transition: 500ms;
  color: ${Colors.primaryBlue};
  border-color: ${(props) => (props.onError ? Colors.red : Colors.concret)};

  &::placeholder {
    color: transparent;
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
  top: 10px;
  color: ${(props) => (props.onError ? Colors.red : Colors.wetAsphalt)};
  transition: 500ms;

  ${NumberFormatStyled}:focus ~ &, input:not(:placeholder-shown) ~ & {
    top: -18px;
    font-size: 0.8rem;
    color: ${Colors.primaryBlue};
  }

  ${NumberFormatStyled}:invalid ~ & {
    color: red;
    border-color: red;
  }
`;