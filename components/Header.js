import React from 'react'
import styled, { css } from 'styled-components'
import Link from 'next/link'

export default () => (
  <Container>

    <FlexFiller />

    <TitleContainer>
      <Title>Liquid Center</Title>
      <SubTitle>A Liquid Democracy Platform</SubTitle>
    </TitleContainer>

    <NavContainer>
      <NavBar>
        <NavFakeMargin />
        <NavItem>
          <Link href="/" passHref>
            <Anchor>Home</Anchor>
          </Link>
        </NavItem>

        <NavItem>
          <Link href="/recent" passHref>
            <Anchor>Recent</Anchor>
          </Link>
        </NavItem>

        <NavItem>
          <Link href="/about" passHref>
            <Anchor>About</Anchor>
          </Link>
        </NavItem>
      </NavBar>
    </NavContainer>

  </Container>
)

/***************************** Styled Components *****************************/

const Container = styled.div`
  flex: 0 0 auto;
  align-self: center;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${'' /* Use large image by default */}
  background-image: url("/static/l-pic6.jpg");
  background-position: center center;
  background-size: cover;
  background-color: black;
  min-height: 350px;
  ${props => props.theme.media.tablet`min-height: 300px;`}
  ${props => props.theme.media.phone`min-height: 250px;`}

  ${'' /* When on tablet, use medium image, except if retina display, bump to large */}
  ${props => props.theme.media.tablet`
    background-image: url("/static/m-pic6.jpg");
    background-image: -webkit-image-set(
            url("/static/m-pic6.jpg") 1x,
            url("/static/l-pic6.jpg") 2x
    );
    background-image: image-set(
            url("/static/m-pic6.jpg") 1x,
            url("/static/l-pic6.jpg") 2x
    );
  `}

${'' /* When on phone, use small image, except if retina display, bump to medium */}
  ${props => props.theme.media.phone`
    background-image: url("/static/s-pic6.jpg");
    background-image: -webkit-image-set(
            url("/static/s-pic6.jpg") 1x,
            url("/static/m-pic6.jpg") 2x
    );
    background-image: image-set(
            url("/static/s-pic6.jpg") 1x,
            url("/static/m-pic6.jpg") 2x
    );
  `}
`

const FlexFiller = styled.div`
  flex: 1 1 auto;
`

const TitleContainer = styled.div`
  flex: 0 0 auto;
  text-align: center;

  @import url('https://fonts.googleapis.com/css?family=Montserrat');
  font-family: 'Montserrat', sans-serif;
`

const Title = styled.div`
  font-size: 2.25em;
  font-weight: bold;
  color: ${props => props.theme.color1};
`

const SubTitle = styled.div`
  margin-top: 10px;
  font-size: 1.25em;
  color: ${props => props.theme.color1};
`

const NavContainer = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`

const NavBar = styled.nav`
  width: 100%;
  max-width: 1040px;
  align-self: center;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 90px;
  ${props => props.theme.media.tablet`margin-bottom: 20px;`}
  ${props => props.theme.media.phone`margin-bottom: 20px;`}
`

// Mirror the margin used in Card1 as displayed in index.js
const NavFakeMargin = styled.div`
  min-width: 20px;
  max-width: 20px;
`

const NavItem = styled.div`
  margin-right: 10px;
`

const Anchor = styled.a`
  text-decoration: none;
  color: ${props => props.theme.color1};
`
