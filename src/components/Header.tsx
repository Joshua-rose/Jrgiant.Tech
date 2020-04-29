import * as React from 'react'
import styled from '@emotion/styled'
import { transparentize } from 'polished'
import { Link } from 'gatsby'
import Logo from '../assets/JrGiantLogo.svg'
import { heights, dimensions, colors } from '../styles/variables'
import Container from './Container'
import Links from '../templates/navigation'

const StyledHeader = styled.header`
  padding: 0 ${dimensions.containerPadding}rem;
  background-color: ${colors.brand};
  color: ${transparentize(0.5, colors.white)};
`

const HeaderInner = styled(Container)`
  display: grid;
  grid-template-columns: 250px 1fr;
  align-items: center;
  height: ${heights.header}px;
`

const HomepageLink = styled(Link)`
  color: ${colors.white};
  font-size: 1.5rem;
  font-weight: 600;
  height: ${heights.header}px;
  img {
    height: 100%;
  }
  &:hover,
  &:focus {
    text-decoration: none;
  }
`

const Menu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  a {
    color: #fff;
  }
`

interface HeaderProps {
  title: string
}

const Header: React.FC<HeaderProps> = ({ title }) => (
  <StyledHeader>
    <HeaderInner>
      <HomepageLink to="/" title={title}>
        <img src={Logo} alt={title} />
      </HomepageLink>
      <Menu>{Links && Object.keys(Links).map(l => <Link to={Links[l]}>{l}</Link>)}</Menu>
    </HeaderInner>
  </StyledHeader>
)

export default Header
