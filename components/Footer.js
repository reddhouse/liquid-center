import React from 'react'
import styled, { css } from 'styled-components'
import Link from 'next/link'

export default () => (
  <Container>

    <div>Hello Footer &nbsp;</div>

    <NavItem>
      <Link href="/" passHref>
        <Anchor>Home</Anchor>
      </Link>
    </NavItem>

  </Container>
)

/***************************** Styled Components *****************************/

const Container = styled.div`
  flex: 1 0 300px;
  display: flex;
  justify-content: flex-start;
  background-color: black;
  color: white;
`

const NavItem = styled.div`
  margin-right: 10px;
`

const Anchor = styled.a`
  text-decoration: none;
  color: ${props => props.theme.color1};
`
