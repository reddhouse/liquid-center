import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import Meta from '../components/Meta'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default () => (
  <React.Fragment>

    <Meta title="Liquid Center" />

    <Container>
      <Header />

      <Featured>
        <div>Liquid Center Home/Index.</div>
        <Link href="/introducing_liquify">
          <a>Introducing Liquify - A Blog Post</a>
        </Link>
      </Featured>

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

const Featured = styled.div`
  flex: 0 0 auto;
`

const FlexFiller = styled.div`
  flex: 1 1 auto;
`
