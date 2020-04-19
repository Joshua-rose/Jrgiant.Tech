import computer from '../../assets/002-computer.svg'
import FigmaLogo from '../../assets/FigmaLogo.svg'
import ReactLogo from '../../assets/React.svg'
import Sass from '../../assets/Sass.svg'
import graphicDesign from '../../assets/004-graphic-design.svg'

const body = [
  { text: 'Design Using Figma and / or XD', img: FigmaLogo },
  { text: 'Style using Sass, LESS, and CSS3', img: Sass },
  { text: 'Support frameworks(React, Gatsby)', img: ReactLogo },
  { text: 'Consum API with Rest / GraphQL', img: computer }
]

const headline = 'Frontend Development'

const FrontEnd = { body, logo: graphicDesign, headline }

export default FrontEnd
