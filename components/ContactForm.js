import React, { useState } from 'react'
import styled from 'styled-components'
import BaseButton from 'styles/Button'
import color from 'color'
import SendSVG from 'static/svg/icon-send.svg'

const FormStyles = styled.form`
  border-radius: 4px;
  display: grid;
  grid-template-columns: repeat(2, [col] 1fr);
  grid-template-rows: auto 1fr;
  grid-gap: 3rem;
  padding: 2rem 3rem 3rem;
  margin-top: auto;
  flex: 1;
  ${props => props.theme.breakpoint.down('lg')} {
    grid-gap: 2rem;
    padding: 2rem;
  }
  label {
    font-family: ${props => props.theme.font.title};
    font-weight: 700;
    display: flex;
    position: relative;
    flex-direction: column-reverse;
    span {
      z-index: 2;
      margin-left: 1rem;
      position: absolute;
      top: 0;
      transition: all 0.25s ease;
    }
    input,
    textarea {
      background: ${props =>
        color(props.theme.color.blue.light)
          .fade(0.2)
          .string()};
      border-radius: 4px;
      z-index: 1;
      margin-top: 1.2rem;
      outline: none;
      border: none;
      font-size: 15px;
      font-family: ${props => props.theme.font.body};
      font-weight: normal;
      width: 100%;
      flex: 1;
      display: block;
      padding: 0.75rem 1rem;
      resize: none;
    }
  }
  input:focus + span,
  textarea:focus + span {
    font-size: 12px;
    margin-top: -0.4rem;
  }
  .form__message {
    grid-column: col 1 / span 2;
    grid-row: 2;
  }
`

const Button = styled(BaseButton)`
  background: linear-gradient(135deg, #dff7fe 0%, #f9dfbc 100%);
  color: ${props => props.theme.color.teal};
  margin: 0 auto;
  grid-column: span 2;
  &:hover:before {
    background: ${color('blue')
      .fade(0.95)
      .string()};
  }
`

const Icon = styled(SendSVG)`
  width: 2.1rem;
  height: 2.1rem;
  display: inline-block;
  margin-left: 1rem;
  path {
    fill: ${props => props.theme.color.teal};
  }
`

const ContactForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  return (
    <FormStyles>
      <label htmlFor="name" className="form__name">
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <span>Nombre</span>
      </label>
      <label htmlFor="email" className="form__email">
        <input
          type="text"
          name="email"
          id="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <span>Correo</span>
      </label>
      <label htmlFor="message" className="form__message">
        <textarea
          type="text"
          name="message"
          id="message"
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
        <span>Mensaje</span>
      </label>
      <Button type="button">
        Enviar
        <Icon />
      </Button>
    </FormStyles>
  )
}

export default ContactForm
