import * as React from 'react'
import Crane from '../assets/Crane.svg'

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
        <img src={Crane} alt="Crane" />
      </Container>
    </Page>
  </IndexLayout>
)

export default IndexPage
