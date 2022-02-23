import { Link } from 'react-router-dom'
import { HeaderContainer, NavContainer } from './styles'

interface IHeaderProps {
  title: string;
  link1: string;
  link2: string;
  linkTitle1: string;
  linkTitle2: string;
}

const Header = ({title, link1, link2, linkTitle1, linkTitle2}: IHeaderProps) => {
  return (
    <HeaderContainer>
      <h1>{title}</h1>
      <NavContainer>
        <Link to={`${link1}`}>{linkTitle1}</Link>
        <Link to={`${link2}`}>{linkTitle2}</Link>
      </NavContainer>
    </HeaderContainer>
  )
}

export default Header