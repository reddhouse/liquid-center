import React, { useState, useLayoutEffect } from 'react'
import styled, { css } from 'styled-components'

export default ({ onClose }) => {
  const [value, setValue] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    // Do something with firebase
    console.log("Captured Value: ", value)
    onClose()
  }

  return (
    <ModalOverlay>
      <ModalContent>
        <Xout onClick={onClose}><div>X</div></Xout>
        <Title>Subscribe to Liquid&nbsp;Center</Title>
        <Blurb>Stay up to date with articles & announcements! You can expect an email from us about once per month.</Blurb>
        <StyledForm onSubmit={handleSubmit}>
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
`

const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`

const StyledInput = styled.input`
  min-width: 350px;
  ${props => props.theme.media.phone`min-width: 250px;`}
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
