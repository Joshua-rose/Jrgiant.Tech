import * as React from 'react'
import StyledSVG, {
  Bash,
  Bootstrap,
  CSS3,
  Git,
  Github,
  HTML5,
  JoshuaAtDesk,
  JrGiantLogo,
  LESS,
  Node,
  Npm,
  ReactSVG,
  Sass,
  verdaccio as Verdaccio
} from '../components/svgs'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'

const IndexPage = () => (
  <IndexLayout>
    <Page>
      <Container>
        <h1>Greetings programs</h1>
        <p>Welcome to our new site.</p>
        <p>We are still in development.</p>
        {[Bash, Bootstrap, CSS3, Git, Github, HTML5, JrGiantLogo, LESS, Node, Npm, ReactSVG, Sass, Verdaccio].map(S => (
          <StyledSVG className={S.name}>
            <S />
          </StyledSVG>
        ))}
        <JoshuaAtDesk />
      </Container>
    </Page>
  </IndexLayout>
)

export default IndexPage
