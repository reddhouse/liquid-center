import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styled, { css } from 'styled-components'
import Header from '../components/Header'

export default () => (
  <React.Fragment>
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
      <title>Liquid Center | Recent</title>
    </Head>

    <Container>
      <Header />
      <div>Recent posts page, content/list of posts goes here.</div>
      <div>[Example] Posts:</div>
      <div>
        <Link href="/introducing_liquify">
          <a>Introducing Liquify - A Blog Post</a>
        </Link>
      </div>
    </Container>
  </React.Fragment>
)

/***************************** Styled Components *****************************/

const Container = styled.div`
  margin: 10px;
`
