import React from 'react'
import Head from 'next/head'
import styled, { css } from 'styled-components'
import Meta from './Meta'
import Header from './Header'
import Footer from './Footer'

export default (props) => (
  <Container>
    <Meta title={props.title} />
    <Header />
    {props.children}
    <FlexFiller />
    <Footer />
  </Container>
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
