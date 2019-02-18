import React from 'react'
import styled, { css } from 'styled-components'
import Link from 'next/link'

export default () => (
  <Container>

    <NavItem>
      <Link href="/">
        <a>Home</a>
      </Link>
    </NavItem>

    <NavItem>
      <Link href="/recent">
        <a>Recent</a>
      </Link>
    </NavItem>

    <NavItem>
      <Link href="/about">
        <a>About</a>
      </Link>
    </NavItem>

  </Container>
)

/***************************** Styled Components *****************************/

const Container = styled.div`
  flex: 0 0 auto;
  display: flex;
  justify-content: flex-start;

  ${'' /* Use large image by default */}
  background-image: url("/static/l-pic.jpg");
  background-position: center center;
  background-size: cover;
  min-height: 30vh;

  ${'' /* When on tablet, use medium image, except if retina display, bump to large */}
  ${props => props.theme.media.tablet`
    background-image: url("/static/m-pic.jpg");
    background-image: -webkit-image-set(
            url("/static/m-pic.jpg") 1x,
            url("/static/l-pic.jpg") 2x
    );
    background-image: image-set(
            url("/static/m-pic.jpg") 1x,
            url("/static/l-pic.jpg") 2x
    );
  `}

${'' /* When on phone, use small image, except if retina display, bump to medium */}
  ${props => props.theme.media.phone`
    background-image: url("/static/s-pic.jpg");
    background-image: -webkit-image-set(
            url("/static/s-pic.jpg") 1x,
            url("/static/m-pic.jpg") 2x
    );
    background-image: image-set(
            url("/static/s-pic.jpg") 1x,
            url("/static/m-pic.jpg") 2x
    );
  `}
`

const NavItem = styled.div`
  margin-right: 10px;
`
