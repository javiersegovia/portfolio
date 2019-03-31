import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Title from 'styles/Title'
import Text from 'styles/Text'

const Styled = styled.div`
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 3rem 3rem 6rem;
  /* ${props => props.theme.breakpoint.down('lg')} {
  } */
  .image-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      margin: 0 auto;
    }
  }
  .Title {
    padding: 1rem 3rem 0;
    &:after {
      width: 40%;
      margin-left: 10%;
      background: ${props => props.color};
      opacity: 0.5;
    }
  }
  .text-content {
    overflow: overlay;
    flex: 1;
    font-size: 1.5rem;
    line-height: 1.5;
    ${props => props.theme.breakpoint.down('lg')} {
      margin: 0 3rem 6rem;
    }
  }
  p, ul {
    padding: 0 3rem;
    white-space: pre-wrap;
    ${props => props.theme.breakpoint.down('lg')} {
      /* line-height: 1.75; */
      padding: 0 3rem 0 1rem;
    }
    /* ${props => props.theme.breakpoint.down('md')} {
      line-height: 1.5;
    } */
  }
`

const Skill = ({ title, image, color, children }) => (
  <Styled color={color}>
    <div className="image-wrapper">
      <img src={image} alt={title} />
    </div>
    <Title as="h3" textAlign="right">
      {title}
    </Title>
    <Text className="text-content">{children}</Text>
  </Styled>
)

Skill.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
}

export default Skill
