import React from 'react'
import Link from 'next/link'
import styled, { css } from 'styled-components'

export default ({s, m, l, xl}) => (
  <Link href="/introducing_liquify">
    <Container>
      <ImageWrapper>
        <StyledImage
          srcSet={`${s} 640w,
                  ${m} 1024w,
                  ${l} 1920w,
                  ${xl} 2000w`}
          sizes="(max-width: 375px) 340px,
                (max-width: 576px) 540px,
                (max-width: 768px) 730px,
                1000px"
          src={`${m}`}
          alt="image"
        />
      </ImageWrapper>
      <CardContent>
        Here is some content. Here is some content. Here is some content. Here is some content.
        Here is some content. Here is some content. Here is some content. Here is some content.
        Here is some content. Here is some content. Here is some content. Here is some content.
      </CardContent>
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

  cursor: pointer;
  box-shadow: rgba(39,44,49,0.06) 8px 14px 38px, rgba(39, 44, 49, 0.03) 1px 3px 8px;
  transition: all 0.4s ease;

  &:hover {
    box-shadow: rgba(39,44,49,0.07) 8px 28px 50px, rgba(39, 44, 49, 0.04) 1px 6px 12px;
    transform: translate3D(0, -1px, 0) scale(1.02);
  }
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

const CardContent = styled.div`
  flex: 1 1 auto;
  padding: 20px;
  border-radius: 0px 0px 5px 5px;
  background-color: lightgrey;
`
