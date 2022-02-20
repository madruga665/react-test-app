import styled from "styled-components";
import { Colors } from "../../styles/variables";

export const HeaderContainer = styled.header`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  align-items: center;
  width: 100%;
  height: 60px;
  background-color: #fff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  h1 {
    color: ${Colors.primaryBlue};
  }
`;

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;

  a {
    font-size: 14px;
    font-weight: bold;
    color: #333;
    text-decoration: none;
    margin-left: 20px;
    transition: opacity 0.2s;
  }
`;
