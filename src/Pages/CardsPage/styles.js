import styled from 'styled-components';
import { Colors } from '../../styles/variables';

export const CardsPageContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  padding: 0;
  margin: 0;
  background-color: ${Colors.pageBackground};
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;