import React from 'react'
import Head from 'next/head'
import styled, { css } from 'styled-components'
import Meta from './Meta'
import MiniHeader from './MiniHeader'
import Footer from './Footer'

export default (props) => {
  const {s, m, l, xl} = props
  return (
    <Container>
      <Meta title={props.metaTitle} />
      <MiniHeader />
      <TitleContainer>
        <Published>{props.published}</Published>
        <Title>{props.title}</Title>
      </TitleContainer>
      <ImageWrapper>
        <StyledImage
          srcSet={`${s} 640w,
                  ${m} 1024w,
                  ${l} 1920w,
                  ${xl} 2000w`}
          sizes="(max-width: 376px) 376px,
                (max-width: 576px) 576px,
                (max-width: 768px) 768px,
                1000px"
          src={`${xl}`}
          alt="image"
        />
      </ImageWrapper>
      <Featured>
        {props.children}
      </Featured>
      <FlexFiller />
      <Footer />
    </Container>
  )
}

/***************************** Styled Components *****************************/

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
`

const TitleContainer = styled.div`
  flex: 0 0 auto;
  text-align: center;
  margin: 40px 0px 40px 0px;
  ${props => props.theme.media.tablet`
    margin: 30px 0px 30px 0px;
  `}
  ${props => props.theme.media.phone`
    margin: 20px 0px 20px 0px;
  `}
`

const Published = styled.div`
  color: ${props => props.theme.color5};
`

const Title = styled.div`
  font-size: 2.25em;
  font-weight: bold;
`

const ImageWrapper = styled.div`
  flex: 0 0 auto;
  height: 800px;
  ${props => props.theme.media.tablet`
    height: 400px;
  `}
  ${props => props.theme.media.phone`
    height: 400px;
  `}
  background-color: black;
`

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const Featured = styled.div`
  flex: 0 0 auto;
  align-self: center;
  width: 100%;
  max-width: 1040px;
`

const FlexFiller = styled.div`
  flex: 1 1 auto;
`
