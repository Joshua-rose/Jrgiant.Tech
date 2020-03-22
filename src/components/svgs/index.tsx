import React from 'react'

import styled from '@emotion/styled'
import { getEmSize } from '../../styles/mixins'
import Bash from './Bash'
import Bootstrap from './Bootstrap'
import CSS3 from './CSS3'
import Git from './Git'
import Github from './Github'
import HTML5 from './HTML5'
// import JavaScript from './JavaScript'
import JoshuaAtDesk from './JoshuaAtDesk'
import JrGiantLogo from './JrGiantLogo'
import LESS from './LESS'
import Node from './Node'
import Npm from './Npm'
import ReactSVG from './React'
import Sass from './Sass'
import verdaccio from './Verdaccio'

export { Bash, Bootstrap, CSS3, Git, Github, HTML5, JoshuaAtDesk, JrGiantLogo, LESS, Node, Npm, ReactSVG, Sass, verdaccio }
const StyledSVG = styled.div`
  max-width: ${getEmSize(200)}em;
  position: absolute;
  svg {
    width: 100%;
  }
`
interface SVGProps {
  x: string
  y: string
  className?: string
}

const SVG: React.FC<SVGProps> = ({ children, className, x, y }) => (
  <StyledSVG className={className} style={{ top: `${x}%`, left: `${y}%` }}>
    {children}
  </StyledSVG>
)

export default SVG
