import styled from 'styled-components';

interface IProps {
  darkMode: boolean;
}

export const ProfileCardContainer = styled.div<IProps>` 
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 25px;
  background-color: ${props => props.darkMode ? props.theme.colors.wetAsphalt : props.theme.colors.white};
  color: ${(props) => props.darkMode ? props.theme.colors.white : props.theme.colors.wetAsphalt};
  text-align: center;
  line-height: 2;

  img {
    width: 200px;
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
