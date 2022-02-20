import styled from "styled-components";
import { Colors } from "../../styles/variables";

export const HomeContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  background-color: ${Colors.pageBackground};
`;

export const LinksContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 2rem;
  a {
    text-decoration: none;
    color: ${Colors.primaryBlue};
    margin-right: 1rem;
    font-weight: 800;
    border: 1px solid ${Colors.primaryBlue};
    padding: 0.5rem;
    border-radius: 5px;
    transition: 500ms;
    &:hover {
      color: #ffff;
      background-color: ${Colors.primaryBlue};
    }
  }
`;
