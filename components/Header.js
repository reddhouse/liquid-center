import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import Link from 'next/link'
import Subscribe from './Subscribe'

export default () => {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <Container>

      {
        modalOpen && <Subscribe onClose={() => setModalOpen(false)} />
      }

      <FlexFiller />

      <TitleContainer>
        <Title>Liquid Center</Title>
        <SubTitle>A Liquid Democracy Platform</SubTitle>
      </TitleContainer>

      <NavColumnContainer>
        <NavRowSubContainer>
          <NavBarLeft>
            <NavFakeMargin />
            <NavItem1>
              <Link href="/" passHref>
                <Anchor>Home</Anchor>
              </Link>
            </NavItem1>

            <NavItem1>
              <Link href="/recent" passHref>
                <Anchor>Recent</Anchor>
              </Link>
            </NavItem1>

            <NavItem1>
              <Link href="/about" passHref>
                <Anchor>About</Anchor>
              </Link>
            </NavItem1>
          </NavBarLeft>

          <NavBarFiller />

          <NavBarRight>
            <NavItem2>
              <StyledButton onClick={() => setModalOpen(true)}>Subscribe</StyledButton>
            </NavItem2>
            <NavFakeMargin />
          </NavBarRight>
        </NavRowSubContainer>
      </NavColumnContainer>

    </Container>
  )
}

/***************************** Styled Components *****************************/

const Container = styled.div`
  flex: 0 0 auto;
  align-self: center;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

${'' /* Use x-large image by default */}
  background-image: url("/static/l-header.jpg");
  background-position: center center;
  background-size: cover;
  background-color: black;
  min-height: 450px;
  ${props => props.theme.media.tablet`min-height: 300px;`}
  ${props => props.theme.media.phone`min-height: 250px;`}

  ${'' /* When on tablet, use medium image, except if retina display, bump to large */}
  ${props => props.theme.media.tablet`
    background-image: url("/static/m-header.jpg");
    background-image: -webkit-image-set(
            url("/static/m-header.jpg") 1x,
            url("/static/l-header.jpg") 2x
    );
    background-image: image-set(
            url("/static/m-header.jpg") 1x,
            url("/static/l-header.jpg") 2x
    );
  `}

${'' /* When on phone, use small image, except if retina display, bump to medium */}
  ${props => props.theme.media.phone`
    background-image: url("/static/s-header.jpg");
    background-image: -webkit-image-set(
            url("/static/s-header.jpg") 1x,
            url("/static/m-header.jpg") 2x
    );
    background-image: image-set(
            url("/static/s-header.jpg") 1x,
            url("/static/m-header.jpg") 2x
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
  font-size: 2.75em;
  ${props => props.theme.media.tablet`font-size: 2.25em;`}
  ${props => props.theme.media.phone`font-size: 2em;`}
  font-weight: bold;
  color: ${props => props.theme.color1};
`

const SubTitle = styled.div`
  margin: 10px 20px 0px 20px;
  font-size: 1.5em;
  ${props => props.theme.media.tablet`font-size: 1.25em;`}
  ${props => props.theme.media.phone`font-size: 1.25em;`}
  color: gainsboro;
`

const NavColumnContainer = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`

const NavRowSubContainer = styled.div`
  width: 100%;
  max-width: 1040px;
  align-self: center;
  display: flex;
  margin-bottom: 90px;
  ${props => props.theme.media.tablet`margin-bottom: 20px;`}
  ${props => props.theme.media.phone`margin-bottom: 20px;`}
`

const NavBarLeft = styled.nav`
  flex: 0 1 auto;
  display: flex;
  justify-content: flex-start;
`

const NavBarFiller = styled.div`
  flex: 99 99 auto;
`

const NavBarRight = styled.nav`
  flex: 0 1 auto;
  display: flex;
  justify-content: flex-end;
`

const StyledButton = styled.div`
  padding: 4px 10px;
  border: 1px solid white;
  border-radius: 10px;
  line-height: 1em;
  color: white;
  cursor: pointer;
`

// Mirror the margin used in Card1 as displayed in index.js
const NavFakeMargin = styled.div`
  min-width: 30px;
  max-width: 30px;
  ${props => props.theme.media.phone`
    min-width: 20px;
    max-width: 20px;
  `}
`

const NavItem1 = styled.div`
  margin-right: 16px;
  ${props => props.theme.media.phone`margin-right: 10px;`}
`

const NavItem2 = styled.div`

`

const Anchor = styled.a`
  text-decoration: none;
  color: ${props => props.theme.color1};
`
