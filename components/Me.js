import React from 'react'
import styled from 'styled-components'
import BaseFullScreen from 'styles/FullScreen'
import BaseGridContainer from 'styles/GridContainer'
import Title from 'styles/Title'
import Text from 'styles/Text'
// import PersonSVG from 'static/svg/guy-intro.svg' TODO

const FullScreen = styled(BaseFullScreen)`
  ${props => props.theme.breakpoint.down('sm')} {
    height: auto;
    overflow: hidden;
    background: ${props => props.theme.color.lightGray};
  }
  & > .svg {
    position: absolute;
    z-index: -1;
    ${props => props.theme.breakpoint.down('md')} {
      opacity: 0.035;
    }
  }
  & > .svg.blue {
    left: 0;
    top: -12.5rem;
    height: 125%;
  }
  & > .svg.red {
    top: 50%;
    right: 0;
    width: 10%;
  }
`

const GridContainer = styled(BaseGridContainer)`
  height: 100%;
  margin-top: 12.5rem;
  ${props => props.theme.breakpoint.down('sm')} {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 6rem;
  }
  .introduction {
    grid-column: col-start 7 / span 5;
    margin: 5rem 2rem 0 0;
    ${props => props.theme.breakpoint.down('md')} {
      grid-column: col-start 7 / span 6;
      margin: 5rem 0 0 2rem;
    }
    ${props => props.theme.breakpoint.down('sm')} {
      margin: 0;
      padding: 0 3rem 6rem;
    }
  }
  .guy-intro {
    grid-column: col-start 2 / span 4;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    ${props => props.theme.breakpoint.down('md')} {
      grid-column: col-start 1 / span 6;
    }
    ${props => props.theme.breakpoint.down('sm')} {
      height: 50rem;
    }
    img {
      object-fit: contain;
      max-height: 90%;
      width: 100%;
    }
  }
`

const Me = () => (
  <FullScreen>
    <img
      src="/static/svg/blue-block-left.svg"
      className="svg blue"
      alt="SVG Blue"
    />
    <img src="/static/svg/red-block.svg" className="svg red" alt="SVG Red" />
    <GridContainer>
      <figure className="guy-intro">
        <img src="/static/svg/guy-intro.svg" alt="Guy Intro" />
        {/* <PersonSVG /> TODO: FIX WITH ILLUSTRATOR << */}
      </figure>
      <section className="introduction">
        <Title className="title">Yo</Title>
        <Text className="text">
          <p>
            Soy un entusiasta de la tecnología y creo firmemente en la
            innovación como clave para el éxito.
          </p>
          <p>
            Tengo tres años trabajando como desarrollador y he participado en
            diversos proyectos donde he adquirido experiencia y conocimientos
            valiosos que utilizo día a día en nuevos emprendimientos.
          </p>
          <p>
            Comencé enfocándome en el frontend, pero con el tiempo he
            diversificado mi área de trabajo involucrándome también en la lógica
            del lado del servidor (backend).
          </p>
          <p>
            Disfruto el proceso de materializar ideas y ver como crecen más allá
            de sus propios límites.
          </p>
        </Text>
      </section>
    </GridContainer>
  </FullScreen>
)

export default Me
