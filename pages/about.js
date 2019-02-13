import React from 'react'
import styled, { css } from 'styled-components'
import Header from '../components/Header'

export default () => (
  <Container>
    <Header />
    <div>About page content goes here.</div>
  </Container>
)

/***************************** Styled Components *****************************/

const Container = styled.div`
  margin: 10px;
`
