import styled from "styled-components";

export const InputDropdownContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 25px;
  width: 90%;

  select {
    height: 40px;
    border: none;
    border-bottom: 2px solid ${props => props.theme.colors.concret};
    background: transparent;
    padding: 0.5rem;
  }
`;
