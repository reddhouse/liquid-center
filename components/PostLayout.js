import React from 'react'
import Head from 'next/head'
import styled, { css } from 'styled-components'
import Header from './Header'

export default (props) => (
  <Container>
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
      <title>Liquid Center | Blog</title>
    </Head>
    <Header />
    {props.children}
  </Container>
)

/***************************** Styled Components *****************************/

const Container = styled.div`
  margin: 10px;
`
