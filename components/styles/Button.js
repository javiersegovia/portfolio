import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Ink from 'react-ink'
import color from 'color'

const Styled = styled.button`
  border: none;
  outline: none;
  font-family: ${props => props.theme.font.title};
  background: ${props => props.theme.gradientColor.blue};
  text-transform: uppercase;
  color: white;
  font-weight: 500;
  font-size: 1.5rem;
  letter-spacing: 0.5px;
  border-radius: 4px;
  padding: 1rem 2.5rem;
  cursor: pointer;
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  margin: 0 auto;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background: none;
  }
  &:hover:before {
    background: ${color('black')
      .fade(0.85)
      .string()};
  }
`

const Button = props => (
  <Styled {...props}>
    <Ink />
    {props.children}
  </Styled>
)

Button.propTypes = {
  children: PropTypes.any.isRequired
}

export default Button
