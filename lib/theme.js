import color from 'color'
import breakpoint from './breakpoints'

const colors = {
  blue: {
    main: '#0040b9',
    dark: '#000547',
    dodger: '#0080FF',
    secondGradient: '#00b8ff',
    light: '#DCDEEF'
  },
  red: '#EF3434',
  yellow: '#FFEA5E',
  teal: '#00B2B2',
  lightGray: '#f3f3f3'
}

const gradientColor = {
  blue: `linear-gradient(135deg, 
    ${colors.blue.main} 0%, 
    ${colors.blue.secondGradient} 100%)`,
  hoverBlue: `linear-gradient(135deg, 
    ${color(colors.blue.main)
      .lighten(0.35)
      .hex()} 0%, 
    ${color(colors.blue.secondGradient)
      .lighten(0.35)
      .hex()} 100%)`
}

const theme = {
  font: {
    title: 'Geomanist',
    body: 'Roboto'
  },
  color: colors,
  gradientColor,
  breakpoint
}

export default theme
