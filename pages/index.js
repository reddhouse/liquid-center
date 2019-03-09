import React from 'react'
import styled from 'styled-components'
import Meta from '../components/Meta'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Card1 from '../components/Card1'
import Card2 from '../components/Card2'

export default () => (
  <React.Fragment>

    <Meta title="Liquid Center" description="A Liquid Democracy Platform"/>

    <Container>
      <Header />

      <Featured>
        <Card1
          s="/static/s-lemur.jpg"
          m="/static/m-lemur.jpg"
          l="/static/l-lemur.jpg"
          xl="/static/xl-lemur.jpg"
        />
        <MiddleSet>
          <Card2
            s="/static/s-hoops.jpg"
            m="/static/m-hoops.jpg"
            l="/static/l-hoops.jpg"
            xl="/static/xl-hoops.jpg"
            summaryTitle="Laws need expiration dates. Voters need to keep score."
            summaryBlurb="Proposing laws that are designed to self-destruct is easy. Deciding whether or not to renew them takes careful planning."
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
  height: 100%;
  background-color: whitesmoke;
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
  font-family: Georgia, serif;
`

const MiddleSet = styled.div`
  display: flex;
  flex-wrap: wrap;
  ${'' /* The Featured div needs no margin since it relies on Card1's margin, but
  the MiddleSet is a flex-wrap arrangement, so to minize gutters between Card2s,
  we need to add 10 more px to the sides of this container. */}
  margin: 0px 10px 0px 10px;
  ${'' /* Undo change above if phone media query is true. */}
  ${props => props.theme.media.phone`
    margin-left: 0px;
    margin-right: 0px;
  `}
`
