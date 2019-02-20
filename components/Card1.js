import React from 'react'
import Link from 'next/link'
import styled, { css } from 'styled-components'

export default () => (
  <Link href="/introducing_liquify">
    <Container>
      <ImageWrapper>
        <StyledImage
          srcSet="/static/xs-pic4.jpg 350w,
                  /static/s-pic4.jpg 640w,
                  /static/m-pic4.jpg 1024w,
                  /static/l-pic4.jpg 1920w"
          sizes="(max-width: 375px) 340px,
                (max-width: 576px) 540px,
                (max-width: 768px) 730px,
                710px"
          src="/static/m-pic4.jpg"
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
  display: flex;
  flex-direction: row;
  min-height: 400px;
  max-height: 400px;
  margin: 0px 20px 40px 20px;
  ${props => props.theme.media.tablet`flex-direction: column;`}
  ${props => props.theme.media.phone`flex-direction: column;`}
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
  border-radius: 5px 0px 0px 5px;
  ${props => props.theme.media.tablet`
    max-height: 175px;
    border-radius: 5px 5px 0px 0px;
  `}
  ${props => props.theme.media.phone`
    max-height: 175px;
    border-radius: 5px 5px 0px 0px;
  `}
  background-color: black;
`

const StyledImage = styled.img`
  width: 100%;
  height: 400px;
  ${props => props.theme.media.tablet`height: 200px;`}
  ${props => props.theme.media.phone`height: 200px;`}
  object-fit: cover;
`

const CardContent = styled.div`
  flex: 1 1 300px;
  min-width: 300px;
  border-radius: 0px 5px 5px 0px;
  ${props => props.theme.media.tablet`
    flex: 1 1 auto;
    min-width: inherit;
    border-radius: 0px 0px 5px 5px;
  `}
  ${props => props.theme.media.phone`
    flex: 1 1 auto;
    min-width: inherit;
    border-radius: 0px 0px 5px 5px;
  `}
  background-color: lightgrey;
`
