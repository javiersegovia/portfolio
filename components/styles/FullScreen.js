import styled, { css } from 'styled-components'

const responsiveMixin = css`
  ${props => props.theme.breakpoint.down(props.responsiveHeight)} {
    height: auto;
  }
`

const FullScreen = styled.div`
  width: 100%;
  height: ${props => (props.double ? '200vh' : '100vh')};
  position: relative;
  z-index: 2;
  background: white;
  ${props => props.responsiveHeight && responsiveMixin}
`

export default FullScreen
