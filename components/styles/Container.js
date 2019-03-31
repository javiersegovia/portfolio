import styled from 'styled-components'
import PropTypes from 'prop-types'

const Styles = styled.div`
  margin: 0 auto;
  padding: 0 15px;
  width: 100%;
  ${props => props.theme.breakpoint.only('xs')} {
    max-width: 100%;
    padding: 0 30px;
  }
  ${props => props.theme.breakpoint.up('sm')} {
    max-width: 90%;
  }
`

const Container = ({ children, className }) => (
  <Styles className={`${className || ''}`}>{children}</Styles>
)

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
}

export default Container
