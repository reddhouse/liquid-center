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
  display: flex;
  justify-content: flex-start;
`

const NavItem = styled.div`
  margin-right: 10px;
`
