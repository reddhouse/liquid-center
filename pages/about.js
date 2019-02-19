import React from 'react'
import Head from 'next/head'
import styled, { css } from 'styled-components'
import Meta from '../components/Meta'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default () => (
  <React.Fragment>

    <Meta title="Liquid Center | About" />

    <Container>
      <Header />
      <div>About page content goes here.</div>
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
`

const FlexFiller = styled.div`
  flex: 1 1 auto;
`
