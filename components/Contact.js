import React from 'react'
import styled from 'styled-components'
import BaseFS from 'styles/FullScreen'
import BaseGC from 'styles/GridContainer'
import Title from 'styles/Title'
import Text from 'styles/Text'
import ContactForm from 'components/ContactForm'
import color from 'color'

const FullScreen = styled(BaseFS)`
  z-index: 1;
  margin-top: 12rem;
`

const SpaceBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 101%;
  height: 100%;
  z-index: 1;
  background: url('/static/svg/bg-space.svg') bottom left no-repeat;
  background-size: cover;
`

const GridContainer = styled(BaseGC)`
  max-height: 100%;
  height: 100%;
  grid-gap: 0 2rem;
  z-index: 2;
  padding-top: 4.5rem;
  color: white;

  section.contact {
    grid-column: col-start 2 / span 5;
    background: ${color('#000511')
      .fade(0.05)
      .string()};
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.75);
    border-radius: 4px;
    margin-bottom: 4.5rem;
    display: flex;
    flex-direction: column;
    ${props => props.theme.breakpoint.down('md')} {
      grid-column: col-start 1 / span 6;
    }
    ${props => props.theme.breakpoint.down('sm')} {
      grid-column: col-start 2 / span 10;
    }
  }
  .contact__title {
    h2:after {
      background: #d83c61;
    }
  }
  .contact__text {
    padding: 0 3rem;
    ${props => props.theme.breakpoint.down('lg')} {
      padding: 0 2rem;
    }
  }
`

const Spaceship = styled.figure`
  grid-column: col-start 8 / span 5;
  position: relative;
  margin: 0;
  ${props => props.theme.breakpoint.only('sm')} {
    grid-column: col-start 7 / span 6;
  }
  ${props => props.theme.breakpoint.down('sm')} {
    display: none;
  }
  .spaceship {
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    margin-left: 50%;
    transform: translateX(-50%);
    ${props => props.theme.breakpoint.down('md')} {
      width: 100%;
      margin: 0;
      transform: none;
    }
  }
  .guy {
    width: 20%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%);
  }
`

const Contact = () => (
  <FullScreen>
    <SpaceBackground>
      <GridContainer>
        <section className="contact">
          <Title className="contact__title" textAlign="right">
            Contacto
          </Title>
          <Text className="contact__text">
            <p>
              Si quieres colaborar conmigo para crear proyectos únicos, te
              invito a dejarme un mensaje contándome un poco sobre la idea que
              tienes en mente. Me comunicaré contigo lo más pronto posible.
            </p>
          </Text>
          <ContactForm />
        </section>
        <Spaceship>
          <img
            src="/static/svg/spaceship-pìnk.svg"
            className="spaceship"
            alt="Spaceship"
          />
          <img
            src="/static/svg/guy-abduction.svg"
            className="guy"
            alt="Guy abducted"
          />
        </Spaceship>
      </GridContainer>
    </SpaceBackground>
  </FullScreen>
)

export default Contact
