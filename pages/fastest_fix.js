import React from 'react'
import styled, { css } from 'styled-components'
import Link from 'next/link'
import PostLayout from '../components/PostLayout'
import PhotoCredit from '../components/PhotoCredit'

export default () => (
  <PostLayout
    metaTitle="Liquid Center | The Fastest Way to Fix Everything"
    published="March 10, 2019"
    titleLine1="The Fastest Way to Fix Everything"
    titleLine2=""
    metaBlurb="Why our lawmaking process matters, and how liquid democracy provides a much needed upgrade."
    s="/static/s-road.jpg"
    m="/static/m-road.jpg"
    l="/static/l-road.jpg"
  >
    <Container>
      <p><FirstWord>Fixing</FirstWord> everything doesn’t mean solving everyone’s personal problems; it means fixing the process we use to solve problems collectively.</p>

      <p><i>Collectively? I'll solve my own problems, thanks.</i></p>

      <p>You may have heard the phrase "a rising tide lifts all boats". In today's ultra-connected, ultra-competitive economy it's probably more apt to say that "many sinking boats will destroy our harbor".</p>

      <p>Today, we face institutional-level problems that are squeezing the life out of the middle and lower classes, to the detriment of the entire nation. Focusing on saving yourself is a short-sighted strategy.</p>

      <p>Furthermore, the biggest problems we face are ones we can't solve alone. For example, say you needed a road from point A to point B, but you can’t afford to spend the next 25 years of your life pouring your own asphalt. Lucky for you, some of your neighbors also want to use this road, and there are three ways we could attempt to solve this problem en masse.</p>

      <p>We could:</p>

      <Indented>
        <div>1. All swing a pickaxes on Saturdays (pool our labor).</div>
        <div>2. Contribute to the RoadzCo Kickstarter campaign (pool our money in a private enterprise).</div>
        <div>3. Form the NRBA - National Road Building Administration (pool our money/tax dollars in a public enterprise).</div>
        <br />
      </Indented>

      <Section>What's the Process?</Section>

      <p>In the example above, the process for pooling our labor is exactly like it sounds, but this method is unrealistic because of logistical challenges.</p>

      <p>The process of pooling money in a private enterprise is much more common, and the United States leads the world in terms of number of companies formed, and amount of productivity generated. However, this method can have some consequences, such as RoadzCo deciding it wants to bulldoze a new road through your back yard...</p>

      <p>Which brings us to our last example; the National Road Building Administration. It turns out the process of keeping RoadzCo from running rampant, is the same process that we use to create and manage the NRBA. I’m referring of course to the lawmaking process, which happens to be in serious disrepair at the moment.</p>

      <Section>How is Lawmaking Broken?</Section>

      <p>With a final reference to our trivial example, let’s pretend again that we’ve finished building roads, at least, it seems to the average citizen that we have plenty of them. However, a few folks are not too happy that road building is coming to an end.</p>

      <p>RoadzCo has shareholders who have been getting rich from their initial investments, the National Road Building Administration has grown to a nice healthy 625,000 employees, and dozens of other related businesses like bulldozer manufacturers and line painters, stand to lose a lot of money.</p>

      <p>When all of these groups decide to get together to convince congress to slow down the end of road building, they form an extremely powerful lobby.</p>

      <p>This is the story of <b>special interests</b> vs. <b>the people's interests</b>, and it’s the main challenge we face with our lawmaking process in 2019. Special interests wield extreme influence in shaping not only the language/content of the actual policies we enact, but also the political parties, election district boundaries, and entire process of electing the people who ultimately end up drafting and passing new laws (or repealing terrible ones).</p>

      <Section>How Do We Fix It?</Section>

      <p>The fastest way to eliminate special interest influence in congress is to take control over both the congressional agenda, and the representatives who decide what becomes law, and what doesn’t.</p>

      <p>More specifically, we need to elect lawmakers who run on a liquid democracy platform such as Liquid Center. You can read a quick summary of liquid democracy <Link href={"/coming_soon"}><a>here</a></Link>, but as it relates to fixing everything as fast as possible, this simply means:</p>

      <Indented>
        <p><b>-</b> Voters use an app to rank their priorities (controlling the agenda), and vote yes/no on every piece of legislation that comes across their representative’s desk (to decide what becomes law).</p>
        <p><b>-</b> Liquid representatives don’t have the chance to be influenced by any other interests, because if the app says voters have chosen YES, they vote yes. If the app says voters have chosen NO, they vote no.</p>
      </Indented>

      <p>Implementing liquid democracy requires NO existing laws to be changed, and Liquid Center is building the necessary technology for citizens to prioritize and fix our most pressing problems. With special interests eliminated from the lawmaking process (along with the greed and corruption which usually accompanies them), the sky is the limit to what we can accomplish.</p>

      <Section>What Can I Do Right Now?</Section>

      <p>Check to see if you have a liquid representative running for office <Link href={"/coming_soon"}><a>in your district</a></Link>.</p>

      <p>If you do, share one of the many <Link href={"/coming_soon"}><a>Liquid Center articles</a></Link> with your friends and family to let them know that liquid democracy is the real deal, and their liquid representative will need their vote in the upcoming elections.</p>

      <p>If you don’t have a liquid representative in your district, reach out to your existing lawmaker (or prospective candidate) and ask them to adopt a liquid democracy platform such as Liquid Center.</p>

      <p>You can also consider running for office yourself! Liquid politics are <Link href={"/coming_soon"}><a>definitely NOT politics as usual</a></Link>, and you or your friends or family members might be persuaded by the <Link href={"/coming_soon"}><a>$348,000 (2-year) Challenge</a></Link>.</p>

      <p>If you're interested in learning more about Liquid Center, and the enhancements we make to liquid democracy, <Link href={"/about"}><a> click here</a></Link>, and be sure to subscribe to Liquid Center below to keep track of our progress.</p>

      <CreditsContainer>
        <div>
          <MiniBold>Written By:</MiniBold>
          <Author>Justin Tuttle</Author>
        </div>
        <PhotoCredit
          author="Joey Kyber"
          link="https://unsplash.com/@jtkyber1?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge"
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
