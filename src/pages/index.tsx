import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import CardContainer from '../components/Cards'
import { breakpoints } from '../styles/variables'

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
  SharePoint,
  verdaccio as Verdaccio
} from '../components/svgs'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
import { ReactLogo } from '../assets'
import SharePointLogo from '../assets/JavaScript.svg'

const StyledDiv = styled.div`
  position: absolute;
  svg {
    width: 100%;
    height: 100%;
  }
`
const StyledImg = styled.img`
  position: absolute;
`
const DeskDiv = styled.div`
  position: relative;
  width: 80vw;
  height: calc(80vw * (19 / 38));
  margin: 0 auto;
`

const LandingPage = styled(Page)`
  padding: 0;
`

const DeskContainer = styled(Container)`
  position: relative;
  justify-content: center;
  align-content: center;
  max-width: 80vw;
`

const DirectionalImage = (direction: string) => styled.div`
  width: 50vw;
  @media (max-width: ${breakpoints.lg}px) {
    width: 70vw;
  }
  @media (max-width: ${breakpoints.md}px) {
    width: 90vw;
  }
  position: relative;
  margin: 3rem auto;

  img {
    position: absolute;
    z-index: -1;
    opacity: 0.3;
    height: 100%;
    ${direction}: -8rem;
  }
  h2 {
    text-align: center;
  }
`

const ImageOnLeft = DirectionalImage('left')
const ImageOnRight = DirectionalImage('right')

const IndexPage = () => (
  <IndexLayout>
    <LandingPage>
      <DeskContainer>
        <DeskDiv>
          {[
            { alt: 'Man at desk', src: JoshuaAtDesk, style: { width: '35%', bottom: '4%', left: '30%' } },
            { alt: 'Bash Logo', src: Bash, style: { top: '84%', left: '6%', width: '15.7%' } },
            { alt: 'Verdaccio Logo', src: Verdaccio, style: { left: '3.8%', top: '12.2%', width: '12%' } },
            { alt: 'NPM Logo', src: Npm, style: { left: '3%', top: '36%', width: '11.5%' } },
            { alt: 'Bootstrap Logo', src: Bootstrap, style: { top: '13%%', right: '10%', width: '7.3%' } },
            { alt: 'CSS3 Logo', src: CSS3, style: { top: '72%', right: '26.5%', width: '7%' } },
            { alt: 'Git Logo', src: Git, style: { top: '67%', left: '0%', width: '12%' } },
            { alt: 'Github Logo', src: Github, style: { top: '81%', right: '3%', width: '8%' } },
            { alt: 'HTML5 Logo', src: HTML5, style: { top: '1%', right: '38%', width: '7%' } },
            { alt: 'SharePoint Logo', src: SharePoint, style: { top: '25%', right: '17.5%', width: '17%' } },
            { alt: 'LESS Logo', src: LESS, style: { top: '68.6%', right: '15.2%', width: '8.0%' } },
            { alt: 'Node Logo', src: Node, style: { top: '60%', left: '18%', width: '12%' } },
            { alt: 'React Logo', src: ReactSVG, style: { top: '1%', left: '20%', width: '19%' } },
            { alt: 'Sass Logo', src: Sass, style: { top: '43%', right: '0%', width: '12%' } }
          ].map((pic: { src: any; alt: string; style: React.CSSProperties }) =>
            typeof pic.src === 'string' ? (
              <StyledImg src={pic.src} alt={pic.alt} style={pic.style} />
            ) : (
                <StyledDiv id={pic.alt.replace(/\s/g, '_')} style={pic.style}>
                  {pic.src()}
                </StyledDiv>
              )
          )}
        </DeskDiv>
      </DeskContainer>
    </LandingPage>
    <CardContainer />
    <ImageOnLeft>
      <img src={ReactLogo} alt="React" />
      <h2>React Based Apps</h2>
      <p>
        Our development team has produced many React-based apps. These apps include JrGiant.Tech, Joshua-Rose Github pages, the GitHub
        Issues to Excel Oauth app, and a variety of React apps built as SharePoint Add-ins.
      </p>
      <p>
        Our team has used Create-React-App, Yeoman, and Gatsby as the frameworks to start or power the apps. The majority of the apps
        consume an API using Rest or GraphQL. Our team uses both JavaScript and TypeScript in the development and testing of the apps.
      </p>
    </ImageOnLeft>
    <ImageOnRight>
      <img src={SharePointLogo} alt="SharePoint" />
      <h2>SharePoint Support</h2>
      <p>
        Our development team has more than six years of experience in supporting SharePoint. The primary developer has created development
        environments through Virtual Machines on Microsoft Azure, managed users via Active Directory and GUI, developed/maintained a variety
        of custom Add-ins, and created custom sandbox solutions.
      </p>
      <p>
        Our primary developer has developed solutions/app/add-ins for SharePoint 2010, 2013, and Online. He has also created bespoke
        PowerShell apps for user-to-license tracking, custom JavaScript bookmarklets/console-code for automation of tasks.
      </p>
    </ImageOnRight>
  </IndexLayout>
)

export default IndexPage
