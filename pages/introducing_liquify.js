import React from 'react'
import styled, { css } from 'styled-components'
import Link from 'next/link'
import PostLayout from '../components/PostLayout'
import PhotoCredit from '../components/PhotoCredit'

export default () => (
  <PostLayout
    metaTitle="Liquid Center | Laws with Expiration Dates"
    published="March 7, 2019"
    titleLine1="Laws need expiration dates."
    titleLine2="Voters need to keep score."
    blurb="Proposing laws that are designed to self-destruct is easy. Deciding whether or not to renew them takes careful planning."
    s="/static/s-hoops.jpg"
    m="/static/m-hoops.jpg"
    l="/static/l-hoops.jpg"
    xl="/static/xl-hoops.jpg"
  >
    <Container>
      <p><FirstWord>Liquid</FirstWord> democracy allows voters (not their representatives) to decide if/when individual bills should be made into law. This can be an intimidating task, especially for citizens who don't have a lot of time to research public policy issues.</p>

      <p>How can anyone be sure that a particular piece of legislation will solve the problem at hand without causing unforeseen or excess damage?</p>

      <p>The short answer is nobody can be sure, especially when the internet, as a primary source of information for most people, is a <Link href={"/introducing_liquify"}><a>terrible place to form opinions.</a></Link></p>

      <p>It’s worth mentioning that liquid democracy does not <i>require</i> people to be involved in the lawmaking process. Liquid democracy, unlike other forms of direct democracy, gives voters the ability to <Link href={"/introducing_liquify"}><a>delegate their vote</a></Link> to someone else, perhaps to a friend or colleague who they deem to be a subject matter expert.</p>

      <Section>Expiration Dates</Section>

      <p>Going back to our original dilemma; How can we encourage citizens to reform our laws and institutions in the face of uncertainty and risk?</p>

      <p>One idea is to mandate that laws be passed with an expiration date. This may lessen the perceived risk, but if the larger goal is to design laws that remain relevant and effective for many years, the aim should be to renew only the best laws at the end of their "trial period".</p>

      <p>This begs another question; How can we tell if a law was a success or failure after it expires?</p>

      <p>Liquid Center proposes the following answer. Representatives who work within the Liquid Center framework have pledged to include the following features into every bill they introduce.</p>

      <Indented>
        <div><b>Success criteria.</b> Concretely, what do voters expect this law to accomplish?</div>
        <div><b>Expiration date.</b> How long should we test this idea? When does this law expire?</div>
        <div><b>Review & Report.</b> Did it work? What are the rules for selecting citizens (or researchers) to rate this law's success against the original success criteria?</div>
      </Indented>

      <p>Since Liquid Center voters are proven to be human, and proven to only have one account (<i>authentication provided by</i> <Link href={"/introducing_liquify"}><a>in.dividual</a></Link>), representatives are able to put each of the above features to their own democratic vote. For example, the expiration date for our new law could be 1 year from now, or 5 years from now, and voters get the chance to decide that, separate of the decision to support the law in the first place.</p>

      <Section>Keeping Score</Section>

      <p>It is imperative that the success criteria and the rules regarding how we will later judge success or failure, are determined ahead of time. This is the only way voters will be able to “score” laws in an objective manner, and see which ones should be renewed, or marked as a failed experiment.</p>

      <p>Otherwise, as is often the case in current political discourse, arguments tend to shift towards how people “feel” about certain laws (separate of their efficacy), which party introduced them, or what agenda the review committee is trying to push, etc.</p>

      <p>You can learn more about the <Link href={"/introducing_liquify"}><a>other guidelines</a></Link> that Liquid Center proposes for liquid representatives, or review the many other <Link href={"/introducing_liquify"}><a>benefits of liquid democracy</a></Link>.</p>

      <CreditsContainer>
        <div>
          <MiniBold>Written By:</MiniBold>
          <Author>Justin Tuttle</Author>
        </div>
        <PhotoCredit
          author="Element5 Digital"
          link="https://unsplash.com/@element5digital?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge"
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
