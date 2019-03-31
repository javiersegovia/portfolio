import React, { useState } from 'react'
import { useTransition } from 'react-spring'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import MenuContent from 'components/MenuContent'

const Styled = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 10;
  width: 0;
  height: 100%;
  ${props =>
    props.opened &&
    `
    width: auto;
  `}
`

const MenuIconStyles = styled.div`
  cursor: pointer;
  z-index: 20;
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 7rem;
  height: 7rem;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  &.opened {
    background: none;
  }
  .wrapper {
    display: inline-block;
  }
  .bar1,
  .bar2,
  .bar3 {
    width: 3.5rem;
    height: 0.5rem;
    background: black;
    margin: 0.6rem 0;
    transition: all ease 0.4s;
  }
  .bar2 {
    transition: all ease 0.25s;
  }
  .bar3 {
    width: 2.5rem;
  }
  &.opened .bar1 {
    transform: rotate(-45deg) translate(-9px, 6px);
  }
  &.opened .bar2 {
    transform: translateX(200%);
  }
  &.opened .bar3 {
    width: 3.5rem;
    transform: rotate(45deg) translate(-9px, -6px);
  }
`

const MenuIcon = ({ opened, toggle }) => (
  <MenuIconStyles className={opened ? 'opened' : ''} onClick={toggle}>
    <div className="wrapper">
      <div className="bar1" />
      <div className="bar2" />
      <div className="bar3" />
    </div>
  </MenuIconStyles>
)

MenuIcon.propTypes = {
  opened: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired
}

const NavMenu = () => {
  const [isOpen, toggleOpen] = useState(false)
  const toggle = () => toggleOpen(!isOpen)
  const transitions = useTransition(isOpen, null, {
    from: { transform: 'translateX(135%)' },
    enter: { transform: 'translateX(0%)' },
    leave: { transform: 'translateX(135%)' }
  })
  return (
    <>
      <Styled opened={isOpen}>
        <MenuIcon opened={isOpen} toggle={toggle} />
        {transitions.map(
          ({ item, props }) => item && <MenuContent style={props} />
        )}
      </Styled>
    </>
  )
}

export default NavMenu
