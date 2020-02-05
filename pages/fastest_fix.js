import React from 'react'
import styled, { css } from 'styled-components'
import Link from 'next/link'
import PostLayout from '../components/PostLayout'
import PhotoCredit from '../components/PhotoCredit'

let thisYear = new Date().getFullYear()

export default () => (
  <PostLayout
    metaTitle="Liquid Center | The Fastest Way to Fix Everything"
    published="March 20, 2019"
    titleLine1="The Fastest Way to Fix Everything"
    titleLine2=""
    metaBlurb="Why our lawmaking process matters, and how liquid democracy provides a much needed upgrade."
    s="/static/s-road.jpg"
    m="/static/m-road.jpg"
    l="/static/l-road.jpg"
  >
    <Container>
      <p><FirstWord>The</FirstWord> fastest way to fix everything is to upgrade the process we use to solve problems collectively.</p>

      <p><i>Collectively? I'll solve my own problems, thanks.</i></p>

      <p>No, actually, you won't. In today's ultra-connected, ultra-competitive economy, you can run, but you can't hide from the institutional-level problems which threaten your wellbeing and security. Sticking your head in the sand is short-sighted, and securing a better future for yourself, means helping us all realize that vision together.</p>

      <p>Let's pretend you needed to build a road from your home to your office, but you can’t afford to spend the next five years of your life pouring asphalt. Lucky for you, some of your neighbors would also benefit from using this road, and there are three ways we could attempt to solve this problem collectively.</p>

      <p>We could:</p>

      <Indented>
        <div><b>1. Have everyone swing pickaxes on Saturday (pool our labor).</b></div>
        <Indented>
          <p>Not possible because of the immense cost and coordination effort required.</p>
        </Indented>
        <div><b>2. Contribute to the RoadzCo™ Kickstarter campaign (pool our money in a private enterprise).</b></div>
        <Indented>
          <p> Better, and much more common. However, this method can have some consequences, such as RoadzCo™ deciding it wants to demolish your house to make way for the road.</p>
        </Indented>
        <div><b>3. Form the NRBA - National Road Building Administration (pool our money/tax dollars in a public enterprise).</b></div>
        <Indented>
          <p>As it happens, the process of keeping RoadzCo™ from running rampant, is the same process that we would use to create and manage the NRBA. I’m referring of course to the lawmaking process, which is unfortunately in serious disrepair at the moment.</p>
        </Indented>
      </Indented>

      <Section>How is Lawmaking Broken?</Section>

      <p>Let’s pretend again that we’ve finished building all the roads we need. At least, it seems to the average citizen that we have plenty of them. However, a few folks are not too happy that road building is coming to an end.</p>

      <p>RoadzCo™ has shareholders who have been getting rich from their initial investments, while the National Road Building Administration has grown to a nice healthy 625,000 employees. Meanwhile, dozens of other related businesses like bulldozer manufacturers and line painters, stand to lose a lot of money.</p>

      <p>When all of these groups decide to get together to convince congress to slow down the end of road building, they form an extremely powerful lobby.</p>

      <p>This is the story of <b>special interests</b> vs. <b>the people's interests</b>, and it’s the main challenge we face with our lawmaking process in {thisYear}. Special interests wield extreme influence in shaping not only the language/content of the actual policies we enact, but also the political parties, election district boundaries, and entire process of electing the people who ultimately end up drafting and passing new laws (or repealing terrible ones).</p>

      <Section>How Do We Fix It?</Section>

      <p>The fastest way to eliminate special interest influence in congress is to take control over both the congressional agenda, and the representatives who decide what becomes law, and what doesn’t.</p>

      <p>More specifically, we need to elect lawmakers who run on a liquid democracy platform such as Liquid Center. You can read a quick summary of liquid democracy <Link href={"/liquid_democracy"}><a>here</a></Link>, but as it relates to fixing everything, this simply means:</p>

      <Indented>
        <p><b>-</b> Voters use an app to rank their priorities (controlling the agenda), and vote yes/no on every piece of legislation that comes across their representative’s desk (to decide what becomes law).</p>
        <p><b>-</b> Liquid representatives don’t have the chance to be influenced by any other interests, because if the app says voters have chosen YES, they vote yes. If the app says voters have chosen NO, they vote no.</p>
      </Indented>

      <p>Implementing liquid democracy requires NO existing laws to be changed, and Liquid Center is building the necessary technology for citizens to prioritize and fix our most pressing problems. With special interests eliminated from the lawmaking process (along with the greed and corruption which usually accompanies them), the sky is the limit to what we can accomplish.</p>

      <Section>What Can I Do Right Now?</Section>

      <p>Check to see if you have a liquid representative running for office <Link href={"/coming_soon"}><a>in your district</a></Link>.</p>

      <p>If you do, share one of several <Link href={"/recent"}><a>Liquid Center articles</a></Link> with your friends and family to let them know that liquid democracy is the real deal, and their liquid representative will need their vote in the upcoming elections.</p>

      <p>If you don’t have a liquid representative in your district, reach out to your existing lawmaker (or prospective candidate) and ask them to adopt a liquid democracy platform such as Liquid Center.</p>

      <p>You can also consider running for office yourself! Liquid politics are <Link href={"/coming_soon"}><a>definitely NOT politics as usual</a></Link>, and you or your friends or family members might be persuaded by the <Link href={"/coming_soon"}><a>$348,000 (2-year) Challenge</a></Link>.</p>

      <p>If you're interested in learning more about Liquid Center, <Link href={"/about"}><a> click here</a></Link>, and be sure to subscribe below to keep track of our progress.</p>

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
