import React from 'react'
import styled from 'styled-components'
import BaseFullScreen from 'styles/FullScreen'
import Base from 'styles/GridContainer'
import Title from 'styles/Title'

const GridContainer = styled(Base)`
  height: 100%;
  margin-top: 150px;
  row-gap: 0;
  grid-template-rows: auto 1fr;
  .projects {
    grid-column: col-start 2 / span 10;
    display: flex;
    align-items: stretch;
  }
  .projects__title {
    grid-column: col-start 2 / -1;
  }
  .projects__content {
    background: gainsboro;
    width: 100%;
    max-height: 410px;
    margin: 20px 50px 0 0;
    flex: 1;
  }
  .projects-illustration {
    margin: 0;
    flex: 0 1 auto;
    img {
      height: 100%;
      max-height: 75%;
    }
  }
`

const FullScreen = styled(BaseFullScreen)`
  & > .svg.blue {
    right: 0;
    top: -12.5rem;
    position: absolute;
    height: 125%;
    z-index: -1;
  }
`

const GridProjects = styled.div`
  display: grid;
  grid-template-columns: repeat(6, [col] 1fr);
  grid-template-rows: repeat(3, [row] 1fr);
  background: gray;
`

const Projects = () => (
  <FullScreen>
    <img
      className="svg blue"
      src="/static/svg/blue-block-right.svg"
      alt="Curve SVG Blue"
    />
    <GridContainer>
      <Title className="projects__title">Proyectos</Title>
      <section className="projects">
        <GridProjects className="projects__content" />
        <figure className="projects-illustration">
          <img src="/static/svg/guy-projects.svg" alt="Guy on Projects" />
        </figure>
      </section>
    </GridContainer>
  </FullScreen>
)

export default Projects
