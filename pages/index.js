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
        <Card1
          s="/static/s-pic5.webp"
          m="/static/m-pic5.webp"
          l="/static/l-pic5.webp"
          xl="/static/xl-pic5.webp"
        />
        <MiddleSet>
          <Card2
            s="/static/s-pic4.webp"
            m="/static/m-pic4.webp"
            l="/static/l-pic4.webp"
            xl="/static/xl-pic4.webp"
          />
          <Card2
            s="/static/s-pic3.webp"
            m="/static/m-pic3.webp"
            l="/static/l-pic3.webp"
            xl="/static/xl-pic3.webp"
          />
          <Card2
            s="/static/s-pic2.webp"
            m="/static/m-pic2.webp"
            l="/static/l-pic2.webp"
            xl="/static/xl-pic2.webp"
          />
        </MiddleSet>
        <Card2
          s="/static/s-pic1.webp"
          m="/static/m-pic1.webp"
          l="/static/l-pic1.webp"
          xl="/static/xl-pic1.webp"
        />
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
