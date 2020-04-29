import styled from '@emotion/styled'
import { heights, breakpoints, colors } from '../styles/variables'

const TriangleSection = styled.div`
position: absolute;

    clip-path: polygon(0 0,0 50%,100% 0);
    background-color: ${colors.brand};
    top: ${heights.header}px;
    z-index: -1;
    height: 100vh;
    @media (max-width: ${breakpoints.lg}px) {
      height: 575px;
    }
    @media (max-width: ${breakpoints.md}px) {
      height: 325px;
    }
    width: 100%
}
`

export default TriangleSection
