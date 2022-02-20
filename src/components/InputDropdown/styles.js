import styled from "styled-components";
import { Colors } from "../../styles/variables";

export const InputDropdownContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 25px;
  width: 90%;

  select {
    height: 40px;
    border: none;
    border-bottom: 2px solid ${Colors.concret};
    background: transparent;
    padding: 0.5rem;
  }
`;
