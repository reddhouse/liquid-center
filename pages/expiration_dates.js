import React from 'react'
import styled, { css } from 'styled-components'
import Link from 'next/link'
import PostLayout from '../components/PostLayout'
import PhotoCredit from '../components/PhotoCredit'

export default () => (
  <PostLayout
    metaTitle="Liquid Center | Laws with Expiration Dates"
    published="March 7, 2019"
    titleLine1="Making laws with expiration dates."
    titleLine2=""
    metaBlurb="Designing laws that self-destruct can yield amazing benefits, but special planning is required."
    s="/static/s-sunsetboat.jpg"
    m="/static/m-sunsetboat.jpg"
    l="/static/l-sunsetboat.jpg"
  >
    <Container>
      <div><FirstWord>Liquid</FirstWord> democracy allows voters (not their representatives) to decide if/when individual bills should be made into law. This can be an intimidating task, especially for citizens who don't have a lot of time to research public policy issues.</div>

      <p>How can anyone be sure that a particular piece of legislation will solve the problem at hand without causing unforeseen or excess damage?</p>

      <p>The short answer is nobody can be sure. There are too many variables to perfectly predict outcomes, but we shouldn't let that stop us from trying to improve things.</p>

      <p>It should be noted that liquid democracy does not <i>require</i> people to be involved in the lawmaking process. Unlike other forms of direct democracy, liquid democracy gives voters the ability to <Link href={"/coming_soon"}><a>delegate their vote</a></Link> to someone else, perhaps to a friend or colleague with expertise in a certain subject.</p>

      <Section>Expiration Dates</Section>

      <p>Going back to our original dilemma; how can we encourage citizens to take chances on legal and institutional reform in the face of uncertainty and risk?</p>

      <p>One idea is to mandate that laws be passed with expiration dates. This may lessen the perceived risk, but if the larger goal is to design laws that remain relevant and effective for many years, the aim should be to renew only the best laws at the end of their "trial period".</p>

      <p>This begs another question; How can we tell if a law was a success or failure after it expires?</p>

      <p>Liquid Center proposes the following answer. Representatives who work within the Liquid Center framework have pledged to include the following features into every bill they introduce.</p>

      <Indented>
        <div><b>Success Criteria</b> - In quantifiable terms, what do voters expect this law to accomplish?</div>
        <div><b>Expiration Date</b> - How long should we test this idea? When does this law expire?</div>
        <div><b>Evaluation Guidelines</b> - Did it work? What are the rules for selecting citizens (or researchers) to rate this law's success against the original success criteria?</div>
      </Indented>

      <p>Since Liquid Center voters are proven to be human, and proven to only have one account (<i>authentication provided by</i> <Link href={"/coming_soon"}><a>in.dividual</a></Link>), representatives are able to put each of the above features to their own democratic vote. For example, the expiration date for our new law could be 1 year from now, or 5 years from now, and voters get the chance to decide that, separate of the decision to support the law in the first place.</p>

      <Section>Unbiased Reviews</Section>

      <p>It is imperative that the success criteria and the rules regarding how we will later judge success or failure, are determined ahead of time. This is the only way voters will be able to “score” laws in an objective manner, and see which ones should be renewed, or marked as a failed experiment.</p>

      <p>Otherwise, as is often the case in current political discourse, arguments tend to shift towards how people “feel” about certain laws (separate of their efficacy), which party introduced them, or what agenda the review committee is trying to push, etc.</p>

      <p>If you're interested in learning more, view the rest of the <Link href={"/coming_soon"}><a>platform guidelines</a></Link> that Liquid Center proposes for our affiliated representatives, or check out the many other <Link href={"/coming_soon"}><a>benefits of liquid democracy</a></Link>.</p>

      <CreditsContainer>
        <div>
          <MiniBold>Written By:</MiniBold>
          <Author>Justin Tuttle</Author>
        </div>
        {/* <PhotoCredit
          author="Vinit Pathak"
          link="https://unsplash.com/@vinitpathak26?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge"
        /> */}
        <PhotoCredit
          author="Steinar Engeland"
          link="https://unsplash.com/@steinart?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge"
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
