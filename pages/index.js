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
          s="/static/s-pic5.jpg"
          m="/static/m-pic5.jpg"
          l="/static/l-pic5.jpg"
          xl="/static/xl-pic5.jpg"
        />
        <MiddleSet>
          <Card2
            s="/static/s-pic4.jpg"
            m="/static/m-pic4.jpg"
            l="/static/l-pic4.jpg"
            xl="/static/xl-pic4.jpg"
          />
          <Card2
            s="/static/s-pic3.jpg"
            m="/static/m-pic3.jpg"
            l="/static/l-pic3.jpg"
            xl="/static/xl-pic3.jpg"
          />
          <Card2
            s="/static/s-pic2.jpg"
            m="/static/m-pic2.jpg"
            l="/static/l-pic2.jpg"
            xl="/static/xl-pic2.jpg"
          />
        </MiddleSet>
        <Card2
          bigSideMargin
          s="/static/s-pic1.jpg"
          m="/static/m-pic1.jpg"
          l="/static/l-pic1.jpg"
          xl="/static/xl-pic1.jpg"
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
  ${props => props.theme.media.tablet`
    margin-top: 20px;
    max-width: 600px;
  `}
  ${props => props.theme.media.phone`
    margin-top: 20px;
    max-width: 500px;
  `}
  background-color: transparent;
`

const MiddleSet = styled.div`
  display: flex;
  flex-wrap: wrap;
  ${'' /* The Featured div needs no margin since it relies on Card1's margin, but
  the MiddleSet is a flex-wrap arrangement, so to minize gutters between Card2s,
  we need to add 10 more px to the sides of this container. */}
  margin: 0px 10px 0px 10px;
`
