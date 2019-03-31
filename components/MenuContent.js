import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import MenuBG from 'static/svg/menu-block.svg'
import color from 'color'
import Title from 'styles/Title'
import { animated } from 'react-spring'

const Styled = styled(animated.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding-top: 8rem;
  width: 30rem;
  .MenuBG {
    width: auto;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    filter: drop-shadow(
      0 0 2rem
        ${props =>
          color(props.theme.color.blue.main)
            .fade(0.2)
            .string()}
    );
    @media all and (-ms-high-contrast: none) {
      & {
        path {
          fill: #cc2e2e;
        }
      }
    }
  }
`

const MenuLink = ({ children, ...props }) => {
  return (
    <Title as="a" textAlign="center" isMenuLink {...props}>
      {children}
    </Title>
  )
}

MenuLink.propTypes = {
  children: PropTypes.string.isRequired
}

const MenuContent = props => (
  <Styled {...props}>
    <MenuBG className="MenuBG" />
    <MenuLink href="#">Inicio</MenuLink>
    <MenuLink href="#">Yo</MenuLink>
    <MenuLink href="#">Habilidades</MenuLink>
    <MenuLink href="#">Proyectos</MenuLink>
    <MenuLink href="#">Contacto</MenuLink>
  </Styled>
)

export default MenuContent
