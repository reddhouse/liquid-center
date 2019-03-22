import React from 'react'
import styled, { css } from 'styled-components'
import Link from 'next/link'
import PostLayout from '../components/PostLayout'
import PhotoCredit from '../components/PhotoCredit'

export default () => (
  <PostLayout
    metaTitle="Liquid Center | Politicians Without Personalities"
    published="March 17, 2019"
    titleLine1="Politicians Without Personalities"
    titleLine2=""
    metaBlurb="Why it's probably a good thing if you don't know your representatives name."
    s="/static/s-lemur.jpg"
    m="/static/m-lemur.jpg"
    l="/static/l-lemur.jpg"
  >
    <Container>
      <p><FirstWord>Liquid</FirstWord> democracy allows those who are interested, to play a more active role in collective problem solving (aka lawmaking). It also has the unique effect of promoting candidates who might, on the surface, seem a little boring. In this article, we'll discuss why politicians without personalities make great representatives.</p>

      <Section>Brands are Expensive</Section>

      <p>"No personalities" is a bit of stretch. The wonderful group of representatives who have pledged to embrace the Liquid Center platform are obviously intelligent, charismatic folks. Many even have quite charming personalities, but on the job, you might mistake them for robots. They serve to advance no agendas, except those which are <Link href={"/liquid_democracy"}><a>directly communicated by individual voters</a></Link>, and it's perfectly okay to forget their name after election day.</p>

      <p>Contrast that to the politicians you can name off the top of your head. Likely, they fought long and hard to earn the name recognition, but with today's (non-liquid) lawmakers spending as much as 70% of their time fundraising, it makes you wonder if too much time is being devoted to brand promotion.</p>

      <p>Representatives need no brand. It could be argued that lawmakers should not even so much as aspire to another term in office. Promoting a brand and seeking reelection is very expensive, and opens the door for special interests to trade money or influence for favorable legislation.</p>

      <Section>The Job Is Less Demanding</Section>

      <p>In the past, we needed our representatives to have likable personalities to "win friends across the aisle" and negotiate deals. Conversely, we might elect a combative personality who could "wage war on the opposition" and earn a victory for their constituents.</p>

      <p>Today, with the ability to <Link href={"/liquid_technology"}><a>identify real people online</a></Link>, and to tally and communicate voter preferences in real time, we can figure out in advance the most widely supported course of action, and rely on our representative to do just one job. Check the app, place a vote.</p>

      <p>To be fair, "one job" doesn't tell the whole story. Liquid Center requires our affiliated representatives to meet <Link href={"/coming_soon"}><a>several other conditions</a></Link>, but the main point, is that it becomes immediately obvious how well a representative is performing their liquid duty, because you only need to track one metric: <b>Voted as instructed? Yes/No.</b></p>

      <p>If your district indicated YES, on HR1234, and your representative voted NO, that's it; they're out. Liquid Center representatives have pledged to immediately resign from their position in office if they contradict the objective, quantified will of the voters.</p>

      <Section>Simply Represent</Section>

      <p>Your representative is not an actor or salesperson. Politicians who serve in executive roles may still need to leverage strong personalities to lead their employees or departments, but representatives simply need to represent.</p>

      <p>Luckily, there a growing number of lawmakers who have pledged to set aside their personal preferences and agendas in order to prioritize what the American people want accomplished, and to vote <i>exactly</i> as their constituents indicate on each and every law that comes across their desk.</p>

      <p>If liquid democracy is a new concept to you, please take a moment to read why we think it's <Link href={"/fastest_fix"}><a>the fastest way to fix everything</a></Link>. You can also learn about Liquid Center's mission to promote and enhance liquid democracy on our <Link href={"/about"}><a>about us</a></Link> page.</p>

      <CreditsContainer>
        <div>
          <MiniBold>Written By:</MiniBold>
          <Author>Justin Tuttle</Author>
        </div>
        <PhotoCredit
          author="Roi Dimor"
          link="https://unsplash.com/@roi_dimor?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge"
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
