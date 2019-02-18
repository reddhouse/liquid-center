import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styled, { css } from 'styled-components'
import Meta from '../components/Meta'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default () => (
  <React.Fragment>

    <Meta title="Liquid Center | Recent" />

    <Container>
      <Header />
      <div>Recent posts page, content/list of posts goes here.</div>
      <div>[Example] Posts:</div>
      <div>
        <Link href="/introducing_liquify">
          <a>Introducing Liquify - A Blog Post</a>
        </Link>
      </div>
      <FlexFiller />
      <Footer />
    </Container>

  </React.Fragment>
)

/***************************** Styled Components *****************************/

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  box-sizing: border-box;
  padding: 10px;
`

const FlexFiller = styled.div`
  flex: 1 1 auto;
`
