import React from 'react'
import PropTypes from 'prop-types'
import FullScreen from 'styles/FullScreen'

const SectionWrapper = props => <FullScreen double>{props.children}</FullScreen>

SectionWrapper.propTypes = {
  children: PropTypes.node.isRequired
}

export default SectionWrapper
