import React, { useState, useEffect } from 'react'
import styled, { css } from 'styled-components'
import { addEmail } from '../lib/helpers.js'

export default ({ onClose }) => {
  const [value, setValue] = useState("")
  const [signupStatus, setSignupStatus] = useState("NOT_ATTEMPTED") // NOT_ATTEMPTED, IN_PROGRESS, SUCCEEDED, FAILED

  // Automatically close modal (after 2 seconds) if signup suceeded.
  useEffect(() => {
    if (signupStatus === "SUCCEEDED")
      setTimeout(() => onClose(), 2000)
  },[signupStatus])

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
    <ModalOverlay>
      <ModalContent>
        <Xout onClick={onClose}><div>X</div></Xout>
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
      </ModalContent>
    </ModalOverlay>
  )
}

/***************************** Styled Components *****************************/

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.75);
`

const ModalContent = styled.div`
  width: 100%;
  max-width: 650px;
  padding: 20px;
  @import url('https://fonts.googleapis.com/css?family=Montserrat');
  font-family: 'Montserrat', sans-serif;
  text-align: center;
  color: white;
`

const Xout = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 20px;
  margin-bottom: 40px;
  font-size: 3em;
`

const Title = styled.div`
  margin-bottom: 20px;
  font-size: 2.5em;
`

const Blurb = styled.div`
  margin-bottom: 20px;
  font-size: 1.25em;
  ${props => props.theme.media.phone`font-size: inherit;`}
  line-height: 1.5em;
  opacity: .8;

  ${'' /* No need to see this div if user has started signup process */}
  ${props => props.signupStatus !== "NOT_ATTEMPTED" && css`
    visibility: collapse;
  `}
`

const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  ${'' /* No need to see this div if user has started signup process */}
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
`
