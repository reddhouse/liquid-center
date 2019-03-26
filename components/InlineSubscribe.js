import React, { useState, useEffect } from 'react'
import styled, { css } from 'styled-components'
import { addEmail } from '../lib/helpers.js'

export default () => {
  const [value, setValue] = useState("")
  const [signupStatus, setSignupStatus] = useState("NOT_ATTEMPTED") // NOT_ATTEMPTED, IN_PROGRESS, SUCCEEDED, FAILED

  function handleSubmit(e) {
    e.preventDefault()
    setSignupStatus("IN_PROGRESS")
    addEmail(value, setSignupStatus)
  }

  function renderTitle() {
    switch (signupStatus) {
      case "IN_PROGRESS":
        return <Title>...</Title>
      case "SUCCEEDED":
        return <Title>Thanks for subscribing!</Title>
      case "FAILED":
        return <Title>Sorry, there was an error. Please try again.</Title>
      default:
        return <Title>Subscribe to Liquid&nbsp;Center</Title>
    }
  }

  return (
    <Container>
      <FlexRowContainer>
        <SubscribeSubContainer>
          { renderTitle() }
          <Blurb signupStatus={signupStatus}>Stay up to date with articles & announcements! You can expect an email from us about once per month.</Blurb>
          <StyledForm signupStatus={signupStatus} onSubmit={handleSubmit}>
            <StyledInput
              value={value}
              placeholder={"your_email@example.com"}
              onChange={e => setValue(e.target.value)}
            />
            <StyledButton type="submit">Subscribe</StyledButton>
          </StyledForm>
        </SubscribeSubContainer>
      </FlexRowContainer>
    </Container>
  )
}

/***************************** Styled Components *****************************/

const Container = styled.div`
  flex: 0 0 auto;
  align-self: center;
  width: 100%;
  max-width: 1040px;
`

const FlexRowContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 60px 60px 60px;
  ${'' /* On phones, match 5vw from posts content container (padding, as margin
  has changed to zero) */}
  ${props => props.theme.media.phone`margin: 0px 5vw 30px 5vw;`}
  background-color: ${props => props.theme.color2};
`

const SubscribeSubContainer = styled.div`
  flex: 1 1 auto;
  max-width: 650px;
  padding: 60px 20px;
  ${props => props.theme.media.phone`padding: 20px 20px 0px 20px;`}
  @import url('https://fonts.googleapis.com/css?family=Montserrat');
  font-family: 'Montserrat', sans-serif;
  text-align: center;
`

const Title = styled.div`
  margin-bottom: 20px;
  font-size: 2.5em;
  ${props => props.theme.media.phone`font-size: 2em;`}
  font-weight: bold;
`

const Blurb = styled.div`
  margin-bottom: 20px;
  font-size: 1.25em;
  ${props => props.theme.media.phone`font-size: inherit;`}
  line-height: 1.5em;
  opacity: .8;

  ${props => props.signupStatus !== "NOT_ATTEMPTED" && css`
    visibility: collapse;
  `}
`

const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  ${props => props.signupStatus !== "NOT_ATTEMPTED" && css`
    visibility: collapse;
  `}
`

const StyledInput = styled.input`
  width: 100%;
  max-width: 300px;
  padding: 14px 20px;
  margin: 0px 8px 20px 8px;
  border: none;
  border-radius: 8px;
  font-size: 1.25em;
  letter-spacing: .5px;
`

const StyledButton = styled.button`
  margin: 0px 8px 20px 8px;
  padding: 14px 20px;
  outline: none;
  color: white;
  font-size: 1.25em;
  text-align: center;
  border: none;
  border-radius: 8px;
  background-color:#29a0e0;
  cursor: pointer;
`
