import React from 'react'
import styled, { css } from 'styled-components'
import Link from 'next/link'
import PostLayout from '../components/PostLayout'
import PhotoCredit from '../components/PhotoCredit'

export default () => (
  <PostLayout
    metaTitle="Liquid Center | Liquid Democracy in 60 Seconds"
    published="March 19, 2019"
    titleLine1="Liquid Democracy in 60 Seconds"
    titleLine2=""
    metaBlurb="Liquid democracy in 60 seconds."
    s="/static/s-flagwall.jpg"
    m="/static/m-flagwall.jpg"
    l="/static/l-flagwall.jpg"
  >
    <Container>
      <p><FirstWord>Liquid</FirstWord> democracy is a new way for citizens to participate in the lawmaking process, and to take control of their government.</p>

      <p>Instead of giving representative lawmakers free reign to do what they please between elections, <b>liquid democracy allows the public to set the legislative agenda in congress, and decide which individual bills/initiatives should become law.</b></p>

      <p>Liquid democracy is an upgrade to our existing system of representative democracy, but requires no existing laws to be changed, and can be implemented immediately.</p>

      <Section>Here’s how it works:</Section>

      <p><b>-</b> Voters elect a new, liquid representative, or ask their current lawmaker to convert to a liquid democracy platform such as Liquid Center.</p>

      <p><b>-</b> Voters download an app, such as <a href="https://liquify.us" target="_blank" rel="noopener noreferrer">Liquify</a>, to make their preferences known to their representative, and to collectively determine what problems congress should be focused on fixing.</p>

      <p><b>-</b> Representatives use a version of the same app to tally votes from constituents in their district. When voters indicate YES, on a particular bill/initiative, their representative will vote YES in congress, to turn it into a law.</p>

      <p><b>-</b> Voters can delegate their votes to any other citizen of their choosing when they are too busy, uninterested, or uninformed about a particular policy issue.</p>

      <Section>How can I learn more?</Section>

      <p>By subscribing to Liquid Center below, you can receive new articles about liquid democracy, and signal your support for the promotional and educational work being done by our organization.</p>

      <p>You can also learn more <Link href={"/about"}><a>about us</a></Link>, and see a list of all our <Link href={"/recent"}><a>previous articles</a></Link>.</p>

      <CreditsContainer>
        <div>
          <MiniBold>Written By:</MiniBold>
          <Author>Justin Tuttle</Author>
        </div>
        <PhotoCredit
          author="Malte Schmidt"
          link="https://unsplash.com/@maltesimo?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge"
        />
      </CreditsContainer>
    </Container>
  </PostLayout>
)

/***************************** Styled Components *****************************/

const Container = styled.div`
  margin: 0px 60px 60px 60px;
  padding: 60px;
  ${props => props.theme.media.tablet`padding: 30px;`}
  ${props => props.theme.media.phone`
    margin: 0px 0px 30px 0px;
    padding: 20px 5vw 20px 5vw;
  `}
  background-color: white;
  font-family: Georgia, serif;
  font-size: 1.25em;
  ${props => props.theme.media.tablet`font-size: 1.2em;`}
  ${props => props.theme.media.phone`font-size: 1.1em;`}
  line-height: 1.6em;
`

const FirstWord = styled.span`
  font-variant: small-caps;
  font-size: 1.25em;
  font-weight: bold;
`

const Section = styled.div`
  margin-bottom: -10px;
  padding-top: 10px;
  font-weight: bold;
`

const Indented = styled.div`
  padding: 0px 12px;
`

const CreditsContainer = styled.div`
  display: flex;
  justify-content: space-between;
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
