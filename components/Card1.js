import React from 'react'
import Link from 'next/link'
import styled, { css } from 'styled-components'

export default ({ s, m, l }) => (
  <Link href="/fastest_fix">
    <Container>
      <ImageWrapper>
        <StyledImage
          srcSet={`${s} 640w,
                  ${m} 1024w,
                  ${l} 2000w`}
          sizes="(max-width: 375px) 340px,
                (max-width: 576px) 540px,
                (max-width: 768px) 730px,
                710px"
          src={`${m}`}
          alt="image"
        />
      </ImageWrapper>
      <SummaryContainer>
        <SummaryTitle>The Fastest Way to Fix Everything</SummaryTitle>
        <SummaryBlurb>Too few roads, or too many? Why our lawmaking process matters, and how liquid democracy provides a much needed upgrade.</SummaryBlurb>
      </SummaryContainer>
    </Container>
  </Link>
)

/***************************** Styled Components *****************************/

const Container = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 400px;
  max-height: 400px;
  margin: 0px 30px 40px 30px;
  ${props => props.theme.media.tablet`flex-direction: column;`}
  ${props => props.theme.media.phone`
    flex-direction: column;
    margin-left: 20px;
    margin-right: 20px;
  `}
  cursor: pointer;
  box-shadow: rgba(39,44,49,0.06) 8px 14px 38px, rgba(39, 44, 49, 0.03) 1px 3px 8px;
  ${'' /* transition: all 0.4s ease; */}

  ${'' /* &:hover {
    box-shadow: rgba(39,44,49,0.07) 8px 28px 50px, rgba(39, 44, 49, 0.04) 1px 6px 12px;
    transform: translate3D(0, -1px, 0) scale(1.02);
  } */}
`

const ImageWrapper = styled.div`
  flex: 1 1 auto;
  ${props => props.theme.media.tablet`
    flex: 0 1 auto;
    max-height: 175px;
  `}
  ${props => props.theme.media.phone`
    flex: 0 1 auto;
    max-height: 175px;
  `}
  background-color: black;
`

const StyledImage = styled.img`
  width: 100%;
  height: 400px;
  border-radius: 5px 0px 0px 5px;
  ${props => props.theme.media.tablet`
    height: 200px;
    border-radius: 5px 5px 0px 0px;
  `}
  ${props => props.theme.media.phone`
    height: 200px;
    border-radius: 5px 5px 0px 0px;
  `}
  object-fit: cover;
`

const SummaryContainer = styled.div`
  flex: 1 1 auto;
  min-width: 280px;
  max-width: 280px;
  padding: 30px;
  border-radius: 0px 5px 5px 0px;
  ${props => props.theme.media.tablet`
    flex: 1 1 auto;
    min-width: inherit;
    max-width: inherit;
    border-radius: 0px 0px 5px 5px;
  `}
  ${props => props.theme.media.phone`
    flex: 1 1 auto;
    min-width: inherit;
    max-width: inherit;
    border-radius: 0px 0px 5px 5px;
  `}
  background-color: white;
`

const SummaryTitle = styled.div`
 font-size: 1.25em;
 font-weight: bold;
 margin-bottom: 20px;
`

const SummaryBlurb = styled.div`

`
