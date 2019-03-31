import React, { useRef } from 'react'
import styled, { withTheme } from 'styled-components'
import PropTypes from 'prop-types'
import Modal from 'react-modal'
import Slider from 'react-slick'
import Skill from 'components/Skill'

const modalStyles = {
  overlay: {
    zIndex: 30,
    background: 'rgba(0, 11, 42, .6)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer'
  },
  content: {
    cursor: 'auto',
    position: 'relative',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    flex: '0 1 40%',
    height: '80%',
    padding: 0,
    border: 'none'
  }
}

const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  arrows: false,
  slidesToShow: 1
}

const skillsInfo = {
  frontend: {
    image: '/static/images/card-frontend.png',
    title: 'Cliente',
    content: `En el desarrollo de frontend, trabajo mi código alrededor del ecosistema de React, siguiendo con el principio de las aplicaciones de página única. Manejo con comodidad:

    » HTML5, CSS3, Javascript (ES6+).
    » React, Redux, NextJS, Apollo Client.
    » Rest APIs, GraphQL APIs.
    » SASS, Bootstrap, Material UI, CSS in JS (JSS, Styled Components).`
  },
  backend: {
    image: '/static/images/card-backend.png',
    title: 'Servidor',
    content: `Dentro del backend utilizo principalmente GraphQL, un lenguaje de consultas de APIs optimizado para aplicaciones de cliente. Desde que comencé a utilizarlo en mis proyectos he tenido muy buenos resultados.

    » NodeJS, Express.
    » GraphQL APIs (GraphQL Yoga).
    » Prisma (con base de datos MySQL o PostgreSQL).`
  },
  others: {
    image: '/static/images/card-others.png',
    title: 'Otros',
    content: `Otras herramientas que he aprendido a utilizar y que pueden ser útiles a la hora de desarrollar:

    » Photoshop, Adobe XD
    » Php, Wordpress
    » Babel, Webpack
    » Control de versiones con Git (Github, Gitlab, Bitbucket)
    » Implementación en DigitalOcean, Heroku, Now`
  }
}

const ControlButtons = styled.div`
  position: absolute;
  bottom: 15px;
  padding: 0 15px;
  display: flex;
  width: 100%;
  .prev,
  .next {
    position: relative;
    padding: 5px;
    background: none;
    outline: none;
    cursor: pointer;
    border: 2px solid black;
    border-radius: 50%;
    width: 35px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    &:after {
      content: '';
      border: solid black;
      border-width: 0 3px 3px 0;
      padding: 5px;
    }
  }
  .prev {
    margin-right: auto;
    &:after {
      transform: rotate(135deg);
      margin-left: 5px;
    }
  }
  .next {
    margin-left: auto;
    &:after {
      transform: rotate(-45deg);
      margin-right: 5px;
    }
  }
`

const ModalCarousel = ({ isOpen, index, toggle, theme: { color } }) => {
  const slider = useRef(null)
  const prev = () => {
    slider.current.slickPrev()
  }
  const next = () => {
    slider.current.slickNext()
  }
  const colors = {
    frontend: color.blue.dodger,
    backend: color.red,
    others: color.blue.dark
  }
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => toggle(false)}
      shouldCloseOnOverlayClick
      style={modalStyles}
    >
      <Slider ref={slider} {...sliderSettings} initialSlide={index}>
        {Object.entries(skillsInfo).map(([key]) => (
          <Skill {...skillsInfo[key]} key={key} bg={colors[key]} />
        ))}
      </Slider>
      <ControlButtons>
        <button type="button" className="prev" onClick={prev} />
        <button type="button" className="next" onClick={next} />
      </ControlButtons>
    </Modal>
  )
}

ModalCarousel.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  theme: PropTypes.object.isRequired
}

Modal.setAppElement('body')

export default withTheme(ModalCarousel)
