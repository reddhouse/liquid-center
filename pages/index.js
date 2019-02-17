import React from 'react'
import styled from 'styled-components'
import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/Header'

export default () => (
  <React.Fragment>
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
      <title>Liquid Center</title>
    </Head>

    <Container>
      <Header />
      <div>Liquid Center Home/Index.</div>
      <Link href="/introducing_liquify">
        <a>Introducing Liquify - A Blog Post</a>
      </Link>
    </Container>
  </React.Fragment>
)

/***************************** Styled Components *****************************/

const Container = styled.div`
  margin: 10px;
`
