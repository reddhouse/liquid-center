import React from 'react'
import styled, { css } from 'styled-components'
import Link from 'next/link'
import PostLayout from '../components/PostLayout'
import PhotoCredit from '../components/PhotoCredit'

export default () => (
  <PostLayout
    metaTitle="Liquid Center | Introducing Liquify + in.dividual Identity"
    published="March 20, 2019"
    titleLine1="Introducing Liquify + in.dividual Identity"
    titleLine2=""
    metaBlurb="Technology for liquid democracy. Introducing Liquify and in.dividual identity."
    s="/static/s-tide.jpg"
    m="/static/m-tide.jpg"
    l="/static/l-tide.jpg"
  >
    <Container>
      <p><FirstWord>Liquid Center</FirstWord> is a resource for voters and congressional representatives to learn about, and implement liquid democracy - a new way for citizens to take control of the legislative process.</p>

      <p>If you’re not familiar with liquid democracy, you might enjoy reading our <Link href={"/liquid_democracy"}><a>60-second overview</a></Link>, or a longer explanation of why <Link href={"/fastest_fix"}><a>fixing the legislatiive process</a></Link> is so important.</p>

      <p>Liquid democracy can be implemented immediately, without any existing laws being changed, but it does require that we use technology to solve two main challenges:</p>

      <Indented>
        <div>1. Citizens and representatives need a way to communicate, and a place to securely record votes across various issues.</div>
        <div>2. Citizens need a way to identify themselves online, such that one person cannot create multiple accounts.</div>
        <br />
      </Indented>

      <Section>Introducing Liquify</Section>

      <p>Liquid Center’s flagship application is Liquify, available for demonstration at <a href="https://liquify.us" target="_blank" rel="noopener noreferrer">https://liquify.us</a>. It is the primary tool that Liquid Center affiliated representatives will use to communicate with voters.</p>

      <p>Voters can signal whether or not they want individual bills to be made into law by selecting YES/NO in <i>Legislation in Progress</i>.</p>

      <p>Additionally, Liquify provides a way for citizens to stack-rank the most important problems they face, along with corresponding solutions/initiatives in the <i>Liquid Agenda</i>.</p>

      <p>This allows Liquid Center’s representatives to introduce corresponding bills, so that congress’ priorities unequivocally match those of the American people.</p>

      <Section>in.dividual Identities</Section>

      <p>Liquid Center is also developing a separate identity solution, which will live at <Link href={"/coming_soon"}><a>https://in.dividual.me</a></Link>, and ensure that all Liquify users are unique human beings.</p>

      <p>Here’s the proposed signup flow:</p>

      <Indented>
        <div><b>- </b>Users upload a picture of their face, but can otherwise remain anonymous, with no requirement to submit personally identifiable information (not even a name)!</div>
        <div><b>- </b>Users schedule and engage in a ~3min video chat with a Liquid Center team member or volunteer.</div>
        <div><b>- </b>Users whose faces appear to match their picture are approved, and asked to enter an email address to serve as a username, and to choose a “home” district.</div>
        <div><b>- </b>Users can login to Liquify without a password, by clicking on an emailed invitation, which starts an authenticated session.</div>
        <div><b>- </b>Compromised accounts or lost access to email requires the registration process to be started over again.</div>
        <div><b>- </b>Frequent changes to one’s “home” district may require additional information to be submitted to Liquid Center.</div>
        <br />
      </Indented>

      <Section>Transparency and Decentralization</Section>

      <p>Maintaining the database that will store users’ votes is a large liability. Modern encryption techniques provide enough security (in terms of obfuscating how any one individual voted), but maintaining the set of keys which decrypts that data is another liability.</p>

      <p>Recognizing that there is nothing we can say to assure skeptics that Liquid Center is not tampering with votes, or advancing a secret agenda (we’re not, and we don't), all that is left, is to operate our organization in the most transparent manner possible.</p>

      <p>In the future, you can expect a lot more articles outlining specifics on this topic, including discussions about replacing in.dividual with a self-sovereign identity solution on a decentralized network, like Ethereum. At present, we believe the public is not ready to manage their own private keys, but that this shouldn’t stop the advancement of liquid democracy.</p>

      <CreditsContainer>
        <div>
          <MiniBold>Written By:</MiniBold>
          <Author>Justin Tuttle</Author>
        </div>
        <PhotoCredit
          author="Nattu Adnan"
          link="https://unsplash.com/@reallynattu?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge"
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
