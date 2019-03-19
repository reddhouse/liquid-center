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
          s="/static/s-road.jpg"
          m="/static/m-road.jpg"
          l="/static/l-road.jpg"
        />
        <MiddleSet>
          <Card2
            s="/static/s-flagwall.jpg"
            m="/static/m-flagwall.jpg"
            l="/static/l-flagwall.jpg"
            summaryTitle="Liquid Democracy in 60 Seconds"
            summaryBlurb="Liquid democracy is a new way for citizens to participate in the lawmaking process, and exercise control over their government."
            endpoint="/liquid_democracy"
          />
          <Card2
            s="/static/s-hoops.jpg"
            m="/static/m-hoops.jpg"
            l="/static/l-hoops.jpg"
            summaryTitle="Laws With Expiration Dates"
            summaryBlurb="Designing laws that self-destruct can yield amazing benefits, but special planning is required."
            endpoint="/expiration_dates"
          />
          <Card2
            s="/static/s-lemur.jpg"
            m="/static/m-lemur.jpg"
            l="/static/l-lemur.jpg"
            summaryTitle="Politicians Without Personalities"
            summaryBlurb="Why it's probably a good thing if you don't know your representatives' names."
            endpoint="/personality_free"
          />
        </MiddleSet>
        <Card2
          bigSideMargin
          s="/static/s-tide.jpg"
          m="/static/m-tide.jpg"
          l="/static/l-tide.jpg"
          summaryTitle="Liquid Democracy Requires Technology - Introducing Liquify & in.dividual"
          summaryBlurb="This is an article summary. You should definitely read this."
          endpoint="/coming_soon"
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
