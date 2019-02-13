import React from 'react'
import styled, { css } from 'styled-components'
import Link from 'next/link'
import Header from '../components/Header'

export default () => (
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
)

/***************************** Styled Components *****************************/

const Container = styled.div`
  margin: 10px;
`
