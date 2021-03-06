import React from 'react'
import Link from 'next/link'
import styled, { css } from 'styled-components'

export default ({ bigSideMargin, s, m, l, summaryTitle, summaryBlurb, endpoint }) => (
  <Link href={endpoint}>
    <Container bigSideMargin={bigSideMargin}>
      <ImageWrapper>
        <StyledImage
          srcSet={`${s} 640w,
                  ${m} 1024w,
                  ${l} 2000w`}
          sizes="(max-width: 375px) 340px,
                (max-width: 576px) 540px,
                (max-width: 768px) 730px,
                1000px"
          src={`${m}`}
          alt="image"
        />
      </ImageWrapper>
      <SummaryContainer>
        <SummaryTitle>{summaryTitle}</SummaryTitle>
        <SummaryBlurb>{summaryBlurb}</SummaryBlurb>
      </SummaryContainer>
    </Container>
  </Link>
)

/***************************** Styled Components *****************************/

const Container = styled.div`
  flex: 1 1 300px;
  display: flex;
  flex-direction: column;
  height: 400px;
  margin: 0px 20px 40px 20px;
  ${'' /* See notes in index.js regarding alignment of cards. One Card2 is not part
  of the MiddleSet flex-wrap container, and needs extra margin added here */}
  ${props => props.bigSideMargin && css`
    margin-left: 30px;
    margin-right: 30px;
  `}
  ${'' /* Undo change above if phone media query is true. */}
  ${props => props.theme.media.phone`
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
  flex: 0 1 auto;
  max-height: 175px;
  border-radius: 5px 5px 0px 0px;
  background-color: black;
`

const StyledImage = styled.img`
  width: 100%;
  height: 200px;
  border-radius: 5px 5px 0px 0px;
  object-fit: cover;
`

const SummaryContainer = styled.div`
  flex: 1 1 auto;
  padding: 30px;
  border-radius: 0px 0px 5px 5px;
  background-color: white;
`

const SummaryTitle = styled.div`
 font-size: 1.25em;
 font-weight: bold;
 margin-bottom: 20px;
`

const SummaryBlurb = styled.div`

`
