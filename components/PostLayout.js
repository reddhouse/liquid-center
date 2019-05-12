import React from 'react'
import styled, { css } from 'styled-components'
import Meta from './Meta'
import MiniHeader from './MiniHeader'
import InlineSubscribe from './InlineSubscribe'
import Footer from './Footer'

export default (props) => {
  const { s, m, l } = props
  return (
    <Container>
      <Meta title={props.metaTitle} description={props.metaBlurb}/>
      <MiniHeader />
      <TitleContainer>
        <Published>{props.published}</Published>
        <Title>{props.titleLine1}</Title>
        { props.titleLine2
          ? <Title>{props.titleLine2}</Title>
          : <React.Fragment />
        }
      </TitleContainer>
      <ImageWrapper>
        <StyledImage
          srcSet={`${s} 640w,
                  ${m} 1024w,
                  ${l} 2000w`}
          sizes="(max-width: 376px) 376px,
                (max-width: 576px) 576px,
                (max-width: 768px) 768px,
                1000px"
          src={`${l}`}
          alt="image"
        />
      </ImageWrapper>
      <BlurEffect>
        <BlurLeft />
        <BlurRight />
      </BlurEffect>
      <Featured>
        {props.children}
      </Featured>
      <FlexFiller />
      <InlineSubscribe />
      <Footer />
    </Container>
  )
}

/***************************** Styled Components *****************************/

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const TitleContainer = styled.div`
  flex: 0 0 auto;
  text-align: center;
  margin: 40px 30px 40px 30px;
  ${props => props.theme.media.tablet`
    margin: 30px 20px 30px 30px;
  `}
  ${props => props.theme.media.phone`
    margin: 20px 20px 20px 20px;
  `}
`

const Published = styled.div`
  margin-bottom: 10px;
  color: ${props => props.theme.color5};
`

const Title = styled.div`
  font-size: 2.25em;
  ${props => props.theme.media.phone`font-size: 1.5em;`}
  font-weight: bold;
`

const ImageWrapper = styled.div`
  flex: 0 0 auto;
  align-self: center;
  height: 600px;
  width: 100%;
  max-width: 1200px;
  ${props => props.theme.media.tablet`height: 400px;`}
  ${props => props.theme.media.phone`height: 300px;`}
  background-color: black;
`

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const BlurEffect = styled.div`
  flex: 0 0 200px;
  ${'' /* Center this div in the same manner as Featured. We are in a flex column,
  and do not specify margin width, so center on cross axis. */}
  align-self: center;
  width: 100%;
  max-width: 1040px;

  display: flex;
  justify-content: space-between;
`

const BlurLeft = styled.div`
  content: "";
  margin: 0px 60px 0px 60px;
  z-index: -1;
  display: block;
  width: 20px;
  height: 200px;
  background: rgba(39,44,49,0.15);
  ${'' /* Blur effect no longer needed on phone width. Hide effect, but keep div
  height the same since negative margins in Featured depend on this. */}
  ${props => props.theme.media.phone`background: transparent;`}
  filter: blur(5px);
  transform: rotate(-5deg);
`

const BlurRight = styled.div`
  content: "";
  margin: 0px 60px 0px 60px;
  z-index: -1;
  display: block;
  width: 20px;
  height: 200px;
  background: rgba(39,44,49,0.15);
  ${props => props.theme.media.phone`background: transparent;`}
  filter: blur(5px);
  transform: rotate(5deg);
`

const Featured = styled.div`
  flex: 0 0 auto;
  ${'' /* Negative margin moves Featured up 200px to essentially hide BlurEffect
  div, and up another 90 to place it inside of the image */}
  margin-top: -290px;
  ${props => props.theme.media.phone`margin-top: -200px`}
  align-self: center;
  width: 100%;
  max-width: 1040px;
  background-color: transparent;
`

const FlexFiller = styled.div`
  flex: 1 1 auto;
`
