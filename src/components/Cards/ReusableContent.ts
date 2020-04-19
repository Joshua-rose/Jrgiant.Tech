import lerna from '../../assets/lerna-hero.svg'
import Npm from '../../assets/Npm.svg'
import verdaccio from '../../assets/verdaccio.svg'
import ReusableCompnentsImg from '../../assets/ReusableCompnents.png'

const body = [
  { text: 'Resuable Comonents for React', img: ReusableCompnentsImg },
  { text: 'Stored as NPM modules', img: Npm },
  { text: 'Using NPM Proxy Verdaccio', img: verdaccio },
  { text: 'Stored as MonoRepo with Lerna', img: lerna }
]

const headline = 'Reusable Components'

const ReusableCompnents = { body, logo: ReusableCompnentsImg, headline }

export default ReusableCompnents
