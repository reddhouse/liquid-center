import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styled, { css } from 'styled-components'
import Meta from '../components/Meta'
import Header from '../components/Header'
import Footer from '../components/Footer'

const posts = [
  {
    title: "The Fastest Way to Fix Everything",
    blurb: "Why our lawmaking process matters, and how liquid democracy provides a much needed upgrade.",
    date: "March 20, 2019",
    href: "/fastest_fix"
  },
  {
    title: "Liquid Democracy in 60 Seconds",
    blurb: "Liquid democracy is a new way for citizens to participate in the lawmaking process, and to take control of their government.",
    date: "March 19, 2019",
    href: "/liquid_democracy"
  },
  {
    title: "Laws With Expiration Dates",
    blurb: "Designing laws that self-destruct can yield amazing benefits, but special planning is required.",
    date: "March 18, 2019",
    href: "/expiration_dates"
  },
  {
    title: "Politicians Without Personalities",
    blurb: "Why it's probably a good thing if you don't know your representatives' names.",
    date: "March 17, 2019",
    href: "/personality_free"
  },
  {
    title: "Liquid Technology5 | Introducing Liquify + in.dividual Identity",
    blurb: "Liquid Center's flagship application and authentication service.",
    date: "March 16, 2019",
    href: "/liquid_technology"
  }
]

const sortedPosts = posts.sort((a, b) => {
  a = new Date(a.date)
  b = new Date(b.date)
  return a>b ? -1 : a<b ? 1 : 0
})

const renderRows = () => sortedPosts.map((post) => (
  <PostDetailRow key={post.title}>
    <Published>{post.date}</Published>
    <Link href={post.href} passHref>
      <TitleAnchor>{post.title}</TitleAnchor>
    </Link>
    <Blurb>{post.blurb}</Blurb>
    <hr />
  </PostDetailRow>
))

export default () => (
  <React.Fragment>

    <Meta title="Liquid Center | Recent" />

    <Container>
      <Header />
      <BlurEffect>
        <BlurLeft />
        <BlurRight />
      </BlurEffect>
      <ContentContainer>
        <Content>

          <PageTitle>All Posts</PageTitle>
          <PageSubTitle>Recently updated, first:</PageSubTitle>

          { renderRows() }

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
  margin-bottom: 4px;
  ${props => props.theme.media.phone`
    font-size: 1.1em;
    margin-bottom: 0;
  `}
  font-weight: bold;
`

const PageSubTitle = styled.div`
  font-size: 1.1em;
  margin-bottom: 40px;
  ${props => props.theme.media.phone`
    font-size: 1em;
    margin-bottom: 20px;
  `}
  font-weight: bold;
`

const PostDetailRow = styled.div`

`

const Published = styled.div`
  margin-bottom: 10px;
  font-size: 0.9em;
  color: ${props => props.theme.color11};
`

const TitleAnchor = styled.a`
  font-size: 1.25em;
  text-decoration: none;
`

const Blurb = styled.div`
  margin-top: 10px;
  margin-bottom: 30px;
`
