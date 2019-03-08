import React from 'react'
import styled, { css } from 'styled-components'
import Link from 'next/link'

export default () => (
  <Container>
    <NavBar>

      <NavFakeMargin />
      <div>Liquid Center ©&nbsp;2019</div>
      <FlexFiller />

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

      <NavFakeMargin />

    </NavBar>
  </Container>
)

/***************************** Styled Components *****************************/

const Container = styled.div`
  flex: 1 0 200px;
  display: flex;
  justify-content: center;
  padding-top: 20px;

  @import url('https://fonts.googleapis.com/css?family=Montserrat');
  font-family: 'Montserrat', sans-serif;
  background-color: black;
  color: white;
`

const NavBar = styled.nav`
  width: 100%;
  max-width: 1040px;
  display: flex;
  justify-content: flex-start;
`

// Mirror the margin used in the header
const NavFakeMargin = styled.div`
  min-width: 20px;
  max-width: 20px;
`

const FlexFiller = styled.div`
  flex: 1 1 auto;
`

const NavItem = styled.div`
  margin-right: 10px;
`

const Anchor = styled.a`
  text-decoration: none;
  color: ${props => props.theme.color1};
`
