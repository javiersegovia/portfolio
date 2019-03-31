import React from 'react'
import { useTransition, animated } from 'react-spring'
import styled from 'styled-components'

const Overlay = styled(animated.div)`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 11, 42, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 30;
  cursor: pointer;
`

const Content = styled(animated.div)`
  cursor: auto;
  flex: 0 1 40%;
  max-height: 85%;
  position: relative;
  background: white;
  border-radius: 8px;
  overflow: hidden;
`

const Modal = ({ isOpen, toggle, children }) => {
  const transitions = useTransition(isOpen, item => item, {
    from: { opacity: 0, transform: 'translateY(-10%)' },
    enter: { opacity: 1, transform: 'translateY(0%)' },
    leave: { opacity: 0, transform: 'translateY(10%)', pointerEvents: 'none' }
  })
  return transitions.map(
    ({ item, props, key }) =>
      item && (
        <Overlay
          style={{ opacity: props.opacity, pointerEvents: props.pointerEvents }}
          onClick={toggle}
          key={key}
        >
          <Content style={props} onClick={e => e.stopPropagation()} key={key}>
            {children}
          </Content>
        </Overlay>
      )
  )
}

export default Modal
