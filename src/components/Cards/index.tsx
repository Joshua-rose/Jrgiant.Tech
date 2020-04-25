import React from 'react'
import styled from '@emotion/styled'
import Card from '../Card'
import Automation from './Automation'
import FrontEnd from './FrontEnd'
import ReusableContent from './ReusableContent'
import circuit from '../../assets/circuit-board.svg'

const StyledImage = styled.img`
  position: relative;
  left: -15px;
  top: 0.2rem;
`
const CardContainer = styled.div`
  background-image: url(${circuit});
  background-color: #33333333;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 10vw;
  margin: 0 auto;
`

const StyledUl = styled.ul`
  list-style: none;
  li {
    position: relative;
  }
  img {
    width: 20px;
    position: absolute;
    top: 0.2rem;
    left: -30px;
  }
`

const body = (array: { text: string; img: any }[]) => (
  <StyledUl>
    {array.map(c => (
      <li>
        <StyledImage src={c.img} alt="" />
        {c.text}
      </li>
    ))}
  </StyledUl>
)

const index = () => {
  return (
    <CardContainer>
      {[ReusableContent, FrontEnd, Automation].map(c => (
        <Card logo={c.logo} headline={c.headline} body={body(c.body)} />
      ))}
    </CardContainer>
  )
}

export default index
