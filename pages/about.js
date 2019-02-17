import React from 'react'
import Head from 'next/head'
import styled, { css } from 'styled-components'
import Header from '../components/Header'

export default () => (
  <React.Fragment>
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
      <title>Liquid Center | About</title>
    </Head>

    <Container>
      <Header />
      <div>About page content goes here.</div>
    </Container>
  </React.Fragment>
)

/***************************** Styled Components *****************************/

const Container = styled.div`
  margin: 10px;
`
