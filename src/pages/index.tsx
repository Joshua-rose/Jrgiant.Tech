import React, { useState, useEffect } from 'react'
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

class SvgObj {
  constructor(component: React.FC, name: string) {
    this.directionAngle = Math.floor(Math.random() * 360)
    this.x = Math.floor(Math.random() * 100)
    this.y = Math.floor(Math.random() * 100)
    this.name = name
    this.component = component
    this.vector = {
      x: Math.cos(this.directionAngle),
      y: Math.sin(this.directionAngle)
    }
  }

  directionAngle: number

  vector: { x: number; y: number }

  x: number

  y: number

  name: string

  component: React.FC

  checkBoundaries() {
    if (this.x > 100 || this.x < 0) {
      this.vector.x *= -1
      /* Ensure the dots are pushed inside */
      this.x = Math.max(0, this.x)
    }
    if (this.y > 100 || this.y < 0) {
      this.vector.y *= -1
      /* Ensure the dots are pushed inside */
      this.y = Math.max(0, this.y)
    }
  }

  update() {
    this.checkBoundaries()
    this.x += this.vector.x
    this.y += this.vector.y
    return this
  }
}

export interface RequestRef {
  directionAngle: number

  vector: { x: number; y: number }

  x: number

  y: number

  name: string

  component: JSX.Element

  checkBoundaries: () => void

  update: () => void
}
const IndexPage = () => {
  const requestRef = React.useRef(0)
  const components: { [key: string]: React.FC } = {
    Bash,
    Bootstrap,
    CSS3,
    Git,
    Github,
    HTML5,
    JrGiantLogo,
    LESS,
    Node,
    Npm,
    ReactSVG,
    Sass,
    Verdaccio
  }
  const svgObjs = Object.keys(components).map((S: string) => new SvgObj(components[S], S))
  const [mobileSVG, setMobileSVG] = useState(svgObjs)

  useEffect(() => {
    const animate = () => {
      setMobileSVG(prevMobileSVG => {
        const ms = [...prevMobileSVG]
        ms.map(s => s.update())
        // Object.keys(ms).forEach((key: string) => {
        //   ms[key].update()
        // })
        requestRef.current = requestAnimationFrame(animate)
        return ms
      })
    }
    requestRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(requestRef.current)
  }, [])

  return (
    <IndexLayout>
      <Page>
        <Container>
          <h1>Greetings programs</h1>
          <p>Welcome to our new site.</p>
          <p>We are still in development.</p>
          <div style={{ position: 'relative', width: '100vh', height: '40vh' }}>
            {mobileSVG.map(S => {
              const { name, component: Component, x, y } = S

              return (
                <StyledSVG className={`${name} moving-svg`} x={`${x}`} y={`${y}`} key={name}>
                  <Component />
                </StyledSVG>
              )
            })}
            <div style={{ margin: '0 auto', width: '100%', display: 'flex', justifyContent: 'center', position: 'relative', zIndex: '99' }}>
              <JoshuaAtDesk />
            </div>
          </div>
        </Container>
      </Page>
    </IndexLayout>
  )
}

export default IndexPage
