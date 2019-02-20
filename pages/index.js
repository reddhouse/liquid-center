import React from 'react'
import styled from 'styled-components'
import Meta from '../components/Meta'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Card1 from '../components/Card1'
import Card2 from '../components/Card2'

export default () => (
  <React.Fragment>

    <Meta title="Liquid Center" />

    <Container>
      <Header />

      <Featured>
        <Card1 />
        <MiddleSet>
          <Card2 />
          <Card2 />
          <Card2 />
        </MiddleSet>
        <Card2 />
      </Featured>

      <Footer />
    </Container>

  </React.Fragment>
)

/***************************** Styled Components *****************************/

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

const Featured = styled.div`
  flex: 0 0 auto;
  align-self: center;
  width: 100%;
  max-width: 1040px;
  margin-top: -70px;
  ${props => props.theme.media.tablet`margin-top: 20px;`}
  ${props => props.theme.media.phone`margin-top: 20px;`}
  background-color: transparent;
`

const MiddleSet = styled.div`
  display: flex;
  flex-wrap: wrap;
`
