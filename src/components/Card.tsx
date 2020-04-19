import React from 'react'
import styled from '@emotion/styled'

interface Props {
  logo: string | JSX.Element
  headline: string
  body: JSX.Element
}

const Card = styled.div`
  background-color: #fff;
  border-radius: 30px;
  margin: 3vw;
  padding: 1vw;
  min-width: 338px;
  max-width: 485px;
  flex: 1 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const CardLogo = styled.img`
  width: 45%;
`

const StyledH2 = styled.h2`
  font-size: 1.75rem;
`
const card: React.FC<Props> = ({ logo, headline, body }: Props) => (
  <Card>
    {typeof logo === 'string' ? <CardLogo src={logo} alt={headline} className="primaryLogo" /> : logo}
    <StyledH2>{headline}</StyledH2>
    {body}
  </Card>
)

export default card
