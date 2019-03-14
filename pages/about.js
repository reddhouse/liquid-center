import React from 'react'
import Head from 'next/head'
import styled, { css } from 'styled-components'
import Meta from '../components/Meta'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default () => (
  <React.Fragment>

    <Meta title="Liquid Center | About" />

    <Container>
      <Header />
      <BlurEffect>
        <BlurLeft />
        <BlurRight />
      </BlurEffect>
      <ContentContainer>
        <Content>
          <p>About Liquid Center</p>
          <p>This is how we enhance liquid democracy:</p>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </Content>
      </ContentContainer>
      <Footer />
    </Container>

  </React.Fragment>
)

/***************************** Styled Components *****************************/

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const BlurEffect = styled.div`
  flex: 0 0 200px;
  ${'' /* Center this div in the same manner as Featured. We are in a flex column,
  and do not specify margin width, so center on cross axis. */}
  width: 100%;
  max-width: 1040px;
  align-self: center;

  display: flex;
  justify-content: space-between;
`

const BlurLeft = styled.div`
  z-index: -1;
  width: 20px;
  height: 200px;
  margin: 0px 30px 40px 30px;
  background: rgba(39,44,49,0.15);
  ${'' /* Blur effect no longer needed on phone/tablet width. Hide effect, but keep div
  height the same since negative margins in Featured depend on this. */}
  ${props => props.theme.media.tablet`background: transparent;`}
  ${props => props.theme.media.phone`background: transparent;`}
  filter: blur(5px);
  transform: rotate(-5deg);
`

const BlurRight = styled.div`
  z-index: -1;
  width: 20px;
  height: 200px;
  margin: 0px 30px 40px 30px;
  background: rgba(39,44,49,0.15);
  ${props => props.theme.media.tablet`background: transparent;`}
  ${props => props.theme.media.phone`background: transparent;`}
  filter: blur(5px);
  transform: rotate(5deg);
`

const ContentContainer = styled.div`
  flex: 0 0 auto;
  ${'' /* Negative margin moves Featured up 200px to essentially hide BlurEffect
  div, and up another 70 to place it inside of the header */}
  margin-top: -270px;
  ${props => props.theme.media.tablet`margin-top: -200px`}
  ${props => props.theme.media.phone`margin-top: -200px`}
  width: 100%;
  max-width: 1040px;
  align-self: center;
  background-color: transparent;
`

const Content = styled.div`
  margin: 0px 30px 40px 30px;
  padding: 5vw;
  ${props => props.theme.media.tablet`
    padding: 0;
    margin-left: 30px;
    margin-right: 30px;
    margin-top: 30px;
  `}
  ${props => props.theme.media.phone`
    padding: 0;
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 30px;
  `}
  background-color: white;
`
