import React from 'react'
import styled, { css } from 'styled-components'
import Link from 'next/link'

export default () => (
  <Container>

    <div>Hello Footer &nbsp;</div>

    <NavItem>
      <Link href="/">
        <a>Home</a>
      </Link>
    </NavItem>

  </Container>
)

/***************************** Styled Components *****************************/

const Container = styled.div`
  flex: 0 0 auto;
  display: flex;
  justify-content: flex-start;
`

const NavItem = styled.div`
  margin-right: 10px;
`
