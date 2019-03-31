import Debug from 'components/Debug'
import NavMenu from 'components/NavMenu'
import Home from 'components/Home'
import Me from 'components/Me'
import Skills from 'components/Skills'
import Projects from 'components/Projects'
import Contact from 'components/Contact'
import styled from 'styled-components'

const Wrapper = styled.div`
  background: white;
  z-index: 2;
  width: 100%;
  height: 100%;
  position: relative;
`

const App = () => (
  <div>
    <Debug />
    <NavMenu />
    <Wrapper>
      <Home />
      <Me />
      <Skills />
      <Projects />
    </Wrapper>
    <Contact />
  </div>
)

export default App
