import React from 'react'
import styled, { css } from 'styled-components'
import Link from 'next/link'
import PostLayout from '../components/PostLayout'
import PhotoCredit from '../components/PhotoCredit'

export default () => (
  <PostLayout
    metaTitle="Liquid Center | You Are the Government"
    published="March 10, 2019"
    titleLine1="The moment when you realize you are your government."
    titleLine2=""
    metaBlurb=""
    s="/static/s-lemur.jpg"
    m="/static/m-lemur.jpg"
    l="/static/l-lemur.jpg"
    xl="/static/xl-lemur.jpg"
  >
    <Container>
      <p><FirstWord>Liquid</FirstWord> democracy.</p>

      <p></p>

      {/* ***** Start Copy/Paste ***** */}
      <p></p>

      <p><Link href={"/introducing_liquify"}><a>this is a link</a></Link></p>

      <Section>Expiration Dates</Section>
      <p></p>

      <Indented>
        <div></div>
      </Indented>
      {/* ***** End Copy/Paste ***** */}

      <p>You can learn more about <Link href={"/introducing_liquify"}><a>related stuff</a></Link> that is super relevant, or check out the many other <Link href={"/introducing_liquify"}><a>benefits of liquid democracy</a></Link>.</p>

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
