import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import Header from '../components/Header'

export default () => (
  <Container>
    <Header />
    <div>Liquid Center Home/Index.</div>
    <Link href="/introducing_liquify">
      <a>Introducing Liquify - A Blog Post</a>
    </Link>
  </Container>
)

/***************************** Styled Components *****************************/

const Container = styled.div`
  margin: 10px;
`
