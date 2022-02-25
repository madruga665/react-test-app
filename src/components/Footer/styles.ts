import styled from 'styled-components';

export const FooterContainer = styled.footer`
  width: 100%;
  height: 150px;
  background: ${props => props.theme.colors.primaryBlue};
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  box-shadow: 0px -5px 5px rgba(0, 0, 0, 0.1);
`
