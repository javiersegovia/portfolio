import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Styled = styled.div`
  line-height: 2;
  ${props => props.theme.breakpoint.only('md')} {
    line-height: 1.75;
  }
  ${props => props.theme.breakpoint.down('md')} {
    line-height: 1.5;
  }
  p:first-child {
    margin-top: 0.5rem;
  }
  p:not(:first-child) {
    margin: 2.5rem 0;
  }
  p:last-child {
    margin-bottom: 0;
  }
`

const Text = ({ children, ...props }) => <Styled {...props}>{children}</Styled>

Text.propTypes = {
  children: PropTypes.node.isRequired
}

export default Text
