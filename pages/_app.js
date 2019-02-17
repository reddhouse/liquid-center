import React from 'react'
import App, { Container } from 'next/app'
import styled, { ThemeProvider, css } from 'styled-components'

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render () {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <ThemeProvider theme={lcTheme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Container>
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
    @media (min-width: ${sizes[label] / 16}em) {
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
