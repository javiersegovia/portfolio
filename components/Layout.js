import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'
import theme from '../lib/theme'

const StyledPage = styled.div`
  background: white;
  color: black;
`

const GlobalStyle = createGlobalStyle`
@font-face {
	font-family: 'Geomanist';
	src: url('/static/Geomanist-Medium.woff2') format('woff2'),
    url('/static/Geomanist-Medium.ttf') format('truetype');
  font-weight: 500;
	font-style: normal;
}
@font-face {
	font-family: 'Geomanist';
	src: url('/static/Geomanist-Bold.woff2') format('woff2'),
    url('/static/Geomanist-Bold.ttf') format('truetype');
	font-weight: bold;
	font-style: normal;
}
  @font-face {
    font-family: 'Roboto';
    src: url('/static/Roboto-Bold.ttf') format('ttf');
    font-weight: 700;
    font-style: normal;
  }
  @font-face {
    font-family: 'Roboto';
    src: url('/static/Roboto-Light.ttf') format('ttf');
    font-weight: 300;
    font-style: normal;
  }
  html {
    box-sizing: border-box;
    font-size: 10px;
    overflow-x: hidden;
    max-width: 100%;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.6rem;
    line-height: 1.5;
    font-family: 'roboto';
    font-weight: 300;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  li {
    list-style: none;
  }
  .slick-list,
  .slick-track {
    height: 100%;
  }
  .slick-slider,
  .slick-slide > div {
    height: 100%;
  }
  .ReactModal__Overlay {
    opacity: 0;
    transition: opacity 0.35s ease;
  }
  .ReactModal__Overlay--after-open{
    opacity: 1;
  }
  .ReactModal__Overlay--before-close{
    opacity: 0;
  }
  .ReactModal__Content {
    ${theme.breakpoint.down('lg')} {
      flex-basis: 50% !important;
    }
    ${theme.breakpoint.down('md')} {
      flex-basis: 60% !important;
      height: 90% !important;
    }
    ${theme.breakpoint.down('sm')} {
      flex-basis: 80% !important;
      height: 90% !important;
    }
  }
`
const Layout = props => (
  <ThemeProvider theme={theme}>
    <StyledPage>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link rel="shortcut icon" href="/static/favicon.png" />
        <link
          rel="stylesheet"
          type="text/css"
          href="/static/normalize.min.css"
        />
        <link rel="stylesheet" type="text/css" href="/static/slick.min.css" />
        <title>Javier Segovia | Web Developer</title>
      </Head>
      <GlobalStyle />
      {props.children}
    </StyledPage>
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
