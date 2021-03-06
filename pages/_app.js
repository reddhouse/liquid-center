import React from 'react'
import App, { Container } from 'next/app'
import Router from 'next/router'
import styled, { ThemeProvider, css } from 'styled-components'
import * as gtag from '../lib/gtag'

Router.events.on('routeChangeComplete', (url) => {
  window.scrollTo(0, 0)
  return gtag.pageview(url)
})

class MyApp extends App {
  render () {
    const { Component, pageProps } = this.props

    return (
      <ThemeProvider theme={lcTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}

export default MyApp

/***************************** Media Query Stuff *****************************/

const sizes = {
  desktop: 992,
  tablet: 768,
  phone: 576
}

// Iterate through the sizes and create a media template.
// Use values in styled components like ${media.phone`display: none;`} */} or,
// with a theme, ${props => props.theme.media.phone`max-height: 85vh;`}

const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `
  return acc
}, {})

/***************************** Styled Components *****************************/

const lcTheme = {
  media: media,

  color1: "#fafeff",
  color2: "#f1f1f3",
  color3: "#aaabb8",
  color4: "#2e9cca",
  color5: "#29648a",
  color6: "#464866",
  color7: "#25274d",
  color8: "#191a34",
  color9: "#478547",
  color10: "#bd5757",
  color11: "#4d4d4d"
}
