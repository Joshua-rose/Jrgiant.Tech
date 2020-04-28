import * as React from 'react'
import AnimatedEnvelop from '../assets/Animated Envelop With Text.svg'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'

const PageTwo = () => (
  <IndexLayout>
    <Page>
      <Container>
        <img src={AnimatedEnvelop} alt="Envelope" />
      </Container>
    </Page>
  </IndexLayout>
)

export default PageTwo
