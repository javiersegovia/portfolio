import React from 'react'
import styled from 'styled-components'
import Container from 'styles/Container'
import Btn from 'styles/Button'
import FullScreen from 'styles/FullScreen'
import SittingOnDeskSVG from 'static/svg/guy-sitting-on-desk.svg'

const Title = styled.h1`
  font-size: 7rem;
  text-align: center;
  font-family: ${props => props.theme.font.title};
  margin: 0;
  ${props => props.theme.breakpoint.down('lg')} {
    font-size: 5.5rem;
  }
  ${props => props.theme.breakpoint.down('sm')} {
    font-size: 4.5rem;
  }
`

const FlexContainer = styled(Container)`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  ${props => props.theme.breakpoint.down('md')} {
    flex-direction: column-reverse;
  }
  & > div {
    flex: 0 1 50%;
  }
  .header__svg {
    svg {
      width: 100%;
      height: 100%;
    }
    ${props => props.theme.breakpoint.down('md')} {
      flex: 0 1 45%;
      width: 100%;
      height: 45%;
      margin-bottom: 3rem;
    }
  }
  .header__content {
    font-size: 1.8rem;
    text-align: center;
    ${props => props.theme.breakpoint.down('md')} {
      flex: 0 1 40%;
      padding-bottom: 3rem;
    }
    p {
      width: 300px;
      margin: 10px auto 30px;
    }
  }
`

const Button = styled(Btn)`
  font-weight: 500;
`

const Home = () => (
  <FullScreen>
    <FlexContainer>
      <div className="header__content">
        <Title>Hola, soy Javier</Title>
        <p>
          Desarrollador web comprometido con la innovación y el emprendimiento
        </p>
        <Button>Contáctame</Button>
      </div>
      <div className="header__svg">
        <SittingOnDeskSVG />
      </div>
    </FlexContainer>
  </FullScreen>
)

export default Home
