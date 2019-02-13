import React from 'react'
import styled, { css } from 'styled-components'
import Header from './Header'

export default (props) => (
  <Container>
    <Header />
    {props.children}
  </Container>
)

/***************************** Styled Components *****************************/

const Container = styled.div`
  margin: 10px;
`
