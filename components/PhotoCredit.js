import React from 'react'
import styled, { css } from 'styled-components'

export default ({author, link}) => (
  <div>
    <MiniBold>Photo Credit:</MiniBold>
    <CreditAnchor
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      title={`Download free do whatever you want high-resolution photos from ${author}`}
    >
      <CreditSpan1>
        <CreditSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
          <title>unsplash-logo</title>
          <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path>
        </CreditSvg>
      </CreditSpan1>
      <CreditSpan2>
        {author}
      </CreditSpan2>
    </CreditAnchor>
  </div>
)

/***************************** Styled Components *****************************/

const MiniBold = styled.div`
  font-size: 12px;
  font-weight: bold;
  line-height: 1.2;
`

const CreditAnchor = styled.a`
 background-color: black;
 color: white;
 text-decoration: none;
 padding: 4px 6px;
 font-family: -apple-system, BlinkMacSystemFont, "San Francisco", "Helvetica Neue", Helvetica, Arial, sans-serif;
 font-size: 12px;
 font-weight: bold;
 line-height: 1.2;
 display: inline-block;
 border-radius: 3px;
`

const CreditSpan1 = styled.span`
  display: inline-block;
  padding: 2px 3px;
`

const CreditSpan2 = styled.span`
  display: inline-block;
  padding: 2px 3px;
`

const CreditSvg = styled.svg`
  height: 12px;
  width: auto;
  position: relative;
  vertical-align: middle;
  top: -2px;
  fill: white;
`
