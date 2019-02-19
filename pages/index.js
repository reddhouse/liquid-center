import React from 'react'
import styled from 'styled-components'
import Meta from '../components/Meta'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Card1 from '../components/Card1'


export default () => (
  <React.Fragment>

    <Meta title="Liquid Center" />

    <Container>
      <Header />

      <Featured>
        <Card1 />
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
  ${'' /* Border box forces the width and height properties to include the content,
        padding, and border, but not include the margin.  */}
  ${'' /* box-sizing: border-box; */}
`

const Featured = styled.div`
  flex: 0 0 auto;
  width: 100%;
  max-width: 1040px;
  box-sizing: border-box;
  padding: 0 4vw;
  margin: -70px auto 0 auto;
  ${props => props.theme.media.tablet`margin-top: 20px;`}
  ${props => props.theme.media.phone`margin-top: 20px;`}
  background-color: transparent;
`

const FlexFiller = styled.div`
  flex: 1 1 auto;
`
