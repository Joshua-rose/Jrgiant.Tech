import * as React from 'react'
import styled from '@emotion/styled'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'

interface Iuses {
  name: string
  values: string[]
}
const uses: Iuses[] = [
  { name: 'Editor', values: ['Visual Studio Code'] },
  { name: 'Terminals', values: ['Windows Terminal', 'Git Bash Via CMD', 'Powershell', 'VS Code Integrated Terminal', 'CMD'] },
  { name: 'Hardware', values: ['Hand me down Lenovo IdeaPad', 'Kensington Expert Mouse', 'Microsoft Natural Ergonomic Keyboard'] },
  { name: 'Browsers (in order)', values: ['Brave', 'Chrome', 'FireFox (for research)', 'Edge'] },
  { name: 'Web Tools', values: ['Jira', 'Figma', 'Adobe XD', 'Codepen', 'GitHub', 'Toggl', 'Stack Overflow', 'Windows Mail'] },
  { name: 'Mobile Browsers (in order)', values: ['FireFox (for research)', 'Chrome', 'Safari'] }
]
const StyledContainer = styled(Container)`
  background-color: #fafafa;
  padding: 5vh 5vw;
  border-radius: 5px;
  box-shadow: 0.5vw 0.5vh 2vh #111;
`
const Uses = () => (
  <IndexLayout>
    <Page>
      <StyledContainer>
        <h1>Uses</h1>
        <p>Software and hardware I use for personal projects</p>
        {uses.map((use: Iuses) => (
          <>
            <h2>{use.name}</h2>
            <ul>
              {use?.values.map(li => (
                <li>{li}</li>
              ))}
            </ul>
          </>
        ))}
      </StyledContainer>
    </Page>
  </IndexLayout>
)

export default Uses
