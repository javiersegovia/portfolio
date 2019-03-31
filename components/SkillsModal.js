import React from 'react'
import Modal from 'components/Modal'
import Carousel from 'components/Carousel'
import Skill from 'components/Skill'

const Frontend = () => (
  <Skill
    image="/static/images/card-frontend.png"
    title="Cliente"
    color="yellow"
  >
    <p>
      En el desarrollo de frontend, trabajo mi código alrededor del ecosistema
      de React, siguiendo con el principio de las aplicaciones de página única.
      Manejo con comodidad:
    </p>
    <ul>
      <li>» HTML5, CSS3, Javascript (ES6+).</li>
      <li>» React, Redux, React Spring, Next, Apollo.</li>
      <li>» Rest & GraphQL APIs.</li>
      <li>
        » SASS, Bootstrap, Material UI, CSS in JS (JSS & Styled Components).
      </li>
    </ul>
  </Skill>
)
const Backend = () => (
  <Skill image="/static/images/card-backend.png" title="Servidor" color="blue">
    <p>
      Dentro del backend utilizo principalmente GraphQL, un lenguaje de
      consultas de APIs optimizado para aplicaciones de cliente. Desde que
      comencé a utilizarlo en mis proyectos he tenido muy buenos resultados.
    </p>

    <ul>
      <li>» NodeJS, Express.</li>
      <li>» GraphQL APIs (GraphQL Yoga).</li>
      <li>» Prisma (con base de datos MySQL o PostgreSQL).</li>
    </ul>
  </Skill>
)
const Others = () => (
  <Skill image="/static/images/card-others.png" title="Otros" color="red">
    <p>
      Otras herramientas que he aprendido a utilizar y que pueden ser útiles a
      la hora de desarrollar:
    </p>
    <ul>
      <li>» Photoshop, Adobe XD</li>
      <li>» Php, Wordpress</li>
      <li>» Babel, Webpack</li>
      <li>» Control de versiones con Git (Github, Gitlab, Bitbucket)</li>
      <li>» Implementación en DigitalOcean, Heroku, Now</li>
    </ul>
  </Skill>
)

const items = [Frontend, Backend, Others]

const SkillsModal = ({ isOpen, toggle, index }) => {
  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <Carousel index={index} items={items} />
    </Modal>
  )
}

export default SkillsModal
