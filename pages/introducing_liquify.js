import React from 'react'
import styled, { css } from 'styled-components'
import PostLayout from '../components/PostLayout'

export default () => (
  <PostLayout
    metaTitle="Liquid Center | Introducing Liquify"
    published="February 20, 2019"
    title="Introducing Liquify"
    s="/static/s-pic6.webp"
    m="/static/m-pic6.webp"
    l="/static/l-pic6.webp"
    xl="/static/xl-pic6.webp"
  >
    <Container>Introducing Liquify... content goes here.</Container>
  </PostLayout>
)

/***************************** Styled Components *****************************/

const Container = styled.div`
  margin: 40px 20px 40px 20px;
`
