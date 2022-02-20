import React from 'react'
import { Link } from 'react-router-dom'
import { HeaderContainer, NavContainer } from './styles'

const Header = ({title, link1, link2, linkTitle1, linkTitle2}) => {
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