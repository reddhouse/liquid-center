import React from 'react'
import styled, { css } from 'styled-components'
import Link from 'next/link'

export default () => (
  <Container>

    <NavContainer>
      <NavBar>
        <NavFakeMargin />
        <Title>Liquid Center</Title>
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
  width: 100%;
  height: 60px;
  background-color: black;
`

const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;

  @import url('https://fonts.googleapis.com/css?family=Montserrat');
  font-family: 'Montserrat', sans-serif;
`

const NavBar = styled.nav`
  width: 100%;
  max-width: 1040px;
  align-self: center;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

// Mirror the margin used in the Container displayed in individual post files.
const NavFakeMargin = styled.div`
  min-width: 30px;
  max-width: 30px;
  ${props => props.theme.media.phone`
    min-width: 20px;
    max-width: 20px;
  `}
`

const Title = styled.div`
  font-size: 1.15em;
  font-weight: bold;
  margin-right: 20px;
  color: ${props => props.theme.color1};
`

const NavItem = styled.div`
  margin-right: 10px;
`

const Anchor = styled.a`
  text-decoration: none;
  color: ${props => props.theme.color1};
`
