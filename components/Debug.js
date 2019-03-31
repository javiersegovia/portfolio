import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled, { withTheme } from 'styled-components'

const Debug = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  color: red;
  font-size: 2rem;
  font-weight: 700;
  z-index: 5;
  text-transform: uppercase;
`

const useWindowWidth = () => {
  const [width, setWidth] = useState('')
  useEffect(() => {
    setWidth(window.innerWidth)
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  })
  return width
}

const DebugBreakpoint = ({
  theme: {
    breakpoint: { sizes }
  }
}) => {
  const width = useWindowWidth()
  const currentBreakpoint = () => {
    let breakpoint
    Object.entries(sizes).forEach(size => {
      if (width >= size[1]) [breakpoint] = size
    })
    return breakpoint
  }
  return <Debug>{currentBreakpoint()}</Debug>
}

DebugBreakpoint.propTypes = {
  theme: PropTypes.object.isRequired
}

export default withTheme(DebugBreakpoint)
