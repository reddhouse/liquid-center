import React from 'react'
import styled, { css } from 'styled-components'
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
      <p>Liquid democracy allows voters to decide when individual bills should be made into law. This can be a daunting challenge for average citizens, especially those without backgrounds in law, science, or economics for instance. How can anyone be sure that a particular piece of legislation will solve the problem at hand without causing unforeseen or excess damage?</p>

      <p>The short answer is nobody can be sure, especially when good arguments can be found on both sides of an issue [link - the internet is a bad place to form opinions].</p>

      <p>It’s worth mentioning that liquid democracy does not require people to be involved in the lawmaking process. Liquid democracy, unlike other forms of direct democracy gives voters the ability to delegate their vote to people with more time to spend on research, or people with relatively more expertise in certain subjects [link - what is delegative democracy, or when should I delegate my vote].</p>

      <p>Going back to our original dilemma, how can we encourage citizens to reform our laws and institutions in the face of uncertainty and risk?</p>

      <p>One idea is to mandate that laws be passed with an expiration date. This may skew the risk calculus just enough for some citizens to add their support, but if the larger goal is to design laws that remain relevant and effective for many years, the aim should be to renew only the best laws at the end of their "trial period".</p>

      <p>This begs another question: How can we tell if a law was a success or failure after it expires?</p>

      <p>Liquid Center proposes the following answer. Representatives who work within the Liquid Center framework have pledged to include the following features into every bill they introduce.</p>

      <div>- <b>Success criteria.</b> Concretely, what do voters expect this law to accomplish?</div>
      <div>- <b>Expiration date.</b> How long should we test this idea? When does this law expire?</div>
      <div>- <b>Review & Report.</b> Did it work? What are the rules for selecting citizens (or researchers) to rate this law's success against the original success criteria?</div>

      <p>Since Liquid Center voters are proven to be human, and proven to only have one account [link - in.dividual identity service], our representatives are able to put each of the above features to their own democratic vote. For example, the expiration date for our new law could be 1 year from now, or 5 years from now, and voters get the chance to decide that, separate of the decision to support the law in the first place.</p>

      <p>It is imperative that the success criteria and the rules regarding how we will later judge success or failure, are determined ahead of time. This is the only way voters will be able to “score” laws in an objective manner, and see which ones should be renewed, or marked as a failed experiment.</p>

      <p>Otherwise, as is often the case in current political discourse, arguments tend to shift towards how people “feel” about certain laws (separate of their efficacy), which party introduced them, or what agenda the review committee is trying to push, etc.</p>

      <p>You can learn more about the other guidelines that Liquid Center proposes for liquid democracy representatives here [link - what I just said], or recap the basics of liquid democracy here [link - basics].</p>

      <br />
      <CreditsContainer>
        <MiniBold>Written By:</MiniBold>
        <Author>Justin Tuttle</Author>

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

const CreditsContainer = styled.div`
  margin-top: 40px;
  ${props => props.theme.media.tablet`margin-top: 30px;`}
  ${props => props.theme.media.phone`margin-top: 20px;`}
`

const MiniBold = styled.div`
  font-size: 12px;
  font-weight: bold;
  line-height: 1.2;
`

const Author = styled.div`
  margin-bottom: 20px;
  color: ${props => props.theme.color5};
`
