import styled from 'styled-components';

export const InputContainer = styled.div `
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 1rem;

  label {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }

  input {
    width: 90%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
    font-size: 1rem;
    color: #333;
    &:focus {
      outline: none;
      border-color: #333;
    }
  }
`;
