import styled from 'styled-components';
import { Colors } from '../../styles/variables';

export const ProfileCardContainer = styled.div` 
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 25px;
  background-color: ${props => props.CardType === 'DarkProfileCard' ? Colors.wetAsphalt : Colors.white};
  color: ${props => props.CardType === 'DarkProfileCard' ? Colors.white : Colors.wetAsphalt};
  text-align: center;
  line-height: 2;

  img {
    border-radius: 50%;
    margin: 25px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 25px;
`;
