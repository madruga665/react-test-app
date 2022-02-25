import styled from 'styled-components';

export const CardsPageContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  padding: 0;
  margin: 0;
  background-color: ${props => props.theme.colors.pageBackground};
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;