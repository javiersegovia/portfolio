import React, { useState } from 'react'
import styled from 'styled-components'
import BaseFullScreen from 'styles/FullScreen'
import Base from 'styles/GridContainer'
import Title from 'styles/Title'
import Text from 'styles/Text'
import ModalCarousel from 'components/ModalCarousel'
import SkillsModal from 'components/SkillsModal'

const GridContainer = styled(Base)`
  height: 100%;
  margin-top: 30rem;
  ${props => props.theme.breakpoint.down('md')} {
    margin-top: 10rem;
    padding-bottom: 10rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  ${props => props.theme.breakpoint.only('sm')} {
    margin-top: 20rem;
  }
  .skills {
    grid-column: col-start 2 / span 4;
    ${props => props.theme.breakpoint.only('sm')} {
      grid-column: col-start 1 / span 5;
      padding: 0;
    }
    ${props => props.theme.breakpoint.down('sm')} {
      padding: 0 3rem;
    }
  }
  .cards-wrapper {
    grid-column: col-start 6 / span 7;
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 1;
    ${props => props.theme.breakpoint.down('md')} {
      margin-top: 6rem;
      height: 60rem;
    }
    ${props => props.theme.breakpoint.down('sm')} {
      height: 55rem;
      margin-top: 5rem;
    }
    &:after {
      content: '';
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: url('/static/svg/orbit.svg') center no-repeat;
      background-size: contain;
    }
    .cards-wrapper__modals {
      position: relative;
      margin: 0 auto;
      width: 70%;
      height: 85%;
      z-index: 1;
      ${props => props.theme.breakpoint.only('sm')} {
        width: 55%;
      }
      ${props => props.theme.breakpoint.down('sm')} {
        height: 55rem;
      }
      ${props => props.theme.breakpoint.only('mo')} {
        width: 90%;
      }
      .modal {
        position: absolute;
        margin: 0 auto;
        width: 55%;
        height: 100%;
        max-height: 30rem;
        transform: rotateZ(1deg) rotateY(-10deg) rotateX(5deg);
        ${props => props.theme.breakpoint.down('sm')} {
          height: 60rem;
        }
        h3 {
          text-transform: uppercase;
          font-family: ${p => p.theme.font.title};
          color: white;
          margin-bottom: auto;
        }
        img {
          margin-bottom: auto;
          width: 60%;
        }
      }
      .others {
        top: 0;
        background: ${p => p.theme.color.blue.dark};
        left: 0%;
        img {
          width: 50%;
        }
      }
      .backend {
        background: ${p => p.theme.color.red};
        top: 20%;
        right: 0;
      }
      .frontend {
        bottom: 0;
        background: ${p => p.theme.color.blue.dodger};
        left: 10%;
        img {
          width: 70%;
        }
      }
    }
  }
`

const ImageWrapper = styled.a`
  cursor: pointer;
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  background: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const FullScreen = styled(BaseFullScreen)`
  & > .svg.yellow {
    left: 0;
    bottom: -12rem;
    position: absolute;
    z-index: -1;
    width: 10%;
  }
  & > .svg.circle {
    right: 22rem;
    top: -22rem;
    position: absolute;
    z-index: -1;
    width: 10%;
    ${props => props.theme.breakpoint.down('sm')} {
      right: 5rem;
      top: -7rem;
      width: 12.5%;
    }
  }
`

const Skills = () => {
  const [isOpen, setOpen] = useState(false)
  const [index, setIndex] = useState(0)

  const toggle = n => {
    setIndex(n)
    setOpen(true)
  }

  const toggleModal = () => setOpen(!isOpen)

  return (
    <FullScreen responsiveHeight="md">
      <img
        className="svg circle"
        src="/static/svg/circle-gray.svg"
        alt="Block Circle SVG"
      />
      <img
        className="svg yellow"
        src="/static/svg/yellow-block.svg"
        alt="Block Yellow SVG"
      />
      <GridContainer>
        <section className="skills">
          <Title className="title">Habilidades</Title>
          <Text className="text">
            <p>
              El lenguaje que manejo con mayor comodidad es Javascript. Mi área
              de especialización es el desarrollo de frontend (cliente), sin
              embargo, también tengo experiencia trabajando la lógica del
              servidor (backend), utilizando Node y GraphQL.
            </p>
            <p>
              Oriento mi trabajo hacia la creación de aplicaciones web, a través
              de «Single-page applications». Esto me permite crear sitios y
              aplicaciones modernas, dinámicas y adaptables a cualquier
              necesidad. Las herramientas que manejo son:
            </p>
          </Text>
        </section>
        <div className="cards-wrapper">
          <div className="cards-wrapper__modals">
            <figure className="modal others">
              <ImageWrapper onClick={() => toggle(2)}>
                <h3>Otros</h3>
                <img src="/static/svg/engines.svg" alt="Engines" />
              </ImageWrapper>
            </figure>
            <figure className="modal backend">
              <ImageWrapper onClick={() => toggle(1)}>
                <h3>Backend</h3>
                <img src="/static/svg/graphql.svg" alt="GraphQL" />
              </ImageWrapper>
            </figure>
            <figure className="modal frontend">
              <ImageWrapper onClick={() => toggle(0)}>
                <h3>Frontend</h3>
                <img src="/static/svg/react.svg" alt="React" />
              </ImageWrapper>
            </figure>
          </div>
        </div>
        {/* <ModalCarousel isOpen={isOpen} toggle={toggleModal} index={index} /> */}
        <SkillsModal isOpen={isOpen} toggle={toggleModal} index={index} />
      </GridContainer>
    </FullScreen>
  )
}

export default Skills
