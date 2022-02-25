import styled from "styled-components";

export const FormsPageContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  background-color: #ecf0f1;
  span {
    color: red;
    font-size: smaller;
  }
`;

export const CardsContainer = styled.section`
  display: flex;
  justify-content: ${(props) => (props.cards.length > 0 ? "flex-start" : "center")};
  padding: 25px;
  width: 100%;
`;

export const NotCardsMessage = styled.p`
  color: ${props => props.theme.colors.wetAsphalt};
  font-size: 1.5rem;
  font-weight: bold;
`;
