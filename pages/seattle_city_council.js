import React from 'react'
import styled, { css } from 'styled-components'
import Link from 'next/link'
import PostLayout from '../components/PostLayout'
import PhotoCredit from '../components/PhotoCredit'

export default () => (
  <PostLayout
    metaTitle="Liquid Center | Liquid Democracy in Seattle"
    published="March 25, 2019"
    titleLine1="Liquid Democracy in 60 Seconds"
    titleLine2="(Seattle City Council Edition)"
    metaBlurb="Liquid democracy for Seattle City Council"
    s="/static/s-seattle.jpg"
    m="/static/m-seattle.jpg"
    l="/static/l-seattle.jpg"
  >
    <Container>
      <p><FirstWord>Liquid</FirstWord> democracy is a new way for City Councilmembers to align themselves with the interests of Seattle residents 100% of the time, on 100% of the issues.</p>

      <p>Instead of Councilmembers each going about their own methods of addressing challenges in their districts, <b>liquid democracy encourages the public to set the legislative agenda of the City Council, and decide which individual Council Bills should become law.</b></p>

      <Section>Here’s how it works:</Section>

      <Indented>
        <p><b>-</b> Voters elect a new, liquid Councilmember, or ask their current Councilmember to convert to a liquid democracy platform such as Liquid Center.</p>

        <p><b>-</b> Voters download an app, such as <a href="https://liquify.us" target="_blank" rel="noopener noreferrer">Liquify</a>, to make their preferences known to their Councilmember, and to collectively determine what problems the City Council should be focused on fixing (in order of priority).</p>

        <p><b>-</b> Councilmembers use a version of the same app to tally votes from constituents in their district. When voters indicate YES on a particular bill/initiative, their Councilmember will vote YES in Council, to turn it into law.</p>

        <p><b>-</b> Voters can delegate their votes to any other citizen of their choosing when they are too busy, uninterested, or uninformed about a particular policy issue.</p>
      </Indented>

      <p>The effects of implementing this type of representation in City Council are profound and immediate. Councilmembers no longer have to play the role of superhero (or super-villain), as all parties become aware of exactly where a quantifiable number/percentage of citizens stands on every issue.</p>

      <p>If you'd like to read more about Liquid Center, or liquid democracy in general, see <Link href={"/about"}><a>about us</a></Link>, and our list of <Link href={"/recent"}><a>recent articles</a></Link>.</p>

      <CreditsContainer>
        <div>
          <MiniBold>Written By:</MiniBold>
          <Author>Justin Tuttle</Author>
        </div>
        <PhotoCredit
          author="Oakie"
          link="https://unsplash.com/@jetcityninja?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge"
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
