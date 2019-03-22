import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styled, { css } from 'styled-components'
import Meta from '../components/Meta'
import Header from '../components/Header'
import Footer from '../components/Footer'
import PhotoCredit from '../components/PhotoCredit'

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
          <PageTitle>About Us</PageTitle>
          <p>Liquid Center is a not-for-profit organization (soon-to-be) registered in Washington State, with <Link href={"/coming_soon"}><a>employees</a></Link>, <Link href={"/coming_soon"}><a>volunteers</a></Link>, and <Link href={"/coming_soon"}><a>affiliated representatives</a></Link> contributing remotely from small towns and big cities across America.</p>
          <p><b>Our Objectives</b></p>
          <Indented>
            <p><b>- </b>Educate (and be educated by) all citizens regarding the role that <Link href={"/liquid_democracy"}><a>liquid democracy</a></Link> can play in strengthening the fabric of our society.</p>
            <p><b>- </b>Provide technology and resources for current and prospective representatives who would like to adopt a liquid democracy platform.</p>
          </Indented>
          <p><b>Our Opportunity</b></p>
          <Indented>
            <p>Around the world, people are losing faith in democracy, and losing faith in one another, perhaps without realizing that very powerful entities are actively at work, creating an environment that undermines our trust, and encourages us to point fingers at one another.</p>
            <p>By continually striving to remain impartial and transparent, we hope Liquid Center can be a place of refuge from divisive forces.</p>
            <p>Liquid democracy automatically removes self-interested influencers from the lawmaking process, and Liquid Center’s <Link href={"/liquid_technology"}><a>Liquid Agenda</a></Link> offers clear and objective proof that we do have shared values, and that the sky is the limit to what we can achieve together.</p>
          </Indented>
          <p>If you're interested in volunteering, or simply having a conversation about our objectives or approach, we'd love to hear from you. Click <Link href={"/coming_soon"}><a>here</a></Link> for our contact information.</p>
          <CreditsContainer>
            <PhotoCredit
              author="Nkululeko Jonas"
              link="https://unsplash.com/@nkululekojonas?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge"
            />
          </CreditsContainer>
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
  
  font-family: Georgia, serif;
  font-size: 1.25em;
  ${props => props.theme.media.tablet`font-size: 1.2em;`}
  ${props => props.theme.media.phone`font-size: 1.1em;`}
  line-height: 1.6em;
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

const PageTitle = styled.div`
  font-size: 1.5em;
  margin-bottom: 40px;
  ${props => props.theme.media.phone`
    font-size: 1.1em;
    margin-bottom: 0;
  `}
  font-weight: bold;
`

const Indented = styled.div`
  padding: 0px 12px;
`

const CreditsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 60px;
  ${props => props.theme.media.tablet`padding-top: 40px;`}
  ${props => props.theme.media.phone`padding-top: 30px;`}
`

const MiniBold = styled.div`
  font-size: 12px;
  font-weight: bold;
  line-height: 1.2;
`

const Author = styled.div`
  margin-bottom: 20px;
  padding-top: 2px;
  font-weight: bold;
  color: ${props => props.theme.color5};
`
