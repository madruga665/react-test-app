import NumberFormat from 'react-number-format';
import styled from 'styled-components';

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
  color: ${props => props.theme.colors.primaryBlue};
  border-color: ${(props) => (props.onError ? props.theme.colors.red : props.theme.colors.concret)};

  &::placeholder {
    color: transparent;
  }

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primaryBlue};
  }
`;

export const LabelStyled = styled.label`
  font-size: 1.2rem;
  position: absolute;
  pointer-events: none;
  top: 10px;
  color: ${(props) => (props.onError ? props.theme.colors.red : props.theme.colors.wetAsphalt)};
  transition: 500ms;

  ${NumberFormatStyled}:focus ~ &, input:not(:placeholder-shown) ~ & {
    top: -18px;
    font-size: 0.8rem;
    color: ${props => props.theme.colors.primaryBlue};
  }

  ${NumberFormatStyled}:invalid ~ & {
    color: red;
    border-color: red;
  }
`;