import React, { useState } from 'react'
import Recaptcha from 'react-recaptcha'
import styled from '@emotion/styled'
import { eventNames } from 'cluster'
import AnimatedEnvelop from '../assets/Animated Envelop With Text.svg'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'

const FormContainer = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  align-items: center;
`
const FormSection = styled.div`
  grid-column: 1;
`

const SvgSection = styled.div`
  grid-column: 2;
`

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })

  const verifyCallback = (data: any) => {
    console.log('verify Callback', data)
  }

  const [isRecaptchaLoaded, setIsRecaptchaLoaded] = useState(false)
  const recaptchaLoaded = () => {
    setIsRecaptchaLoaded(true)
  }
  const [isValidForm, setIsValidForm] = useState(false)

  const encode = (data: any) => {
    return Object.keys(data)
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
      .join('&')
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    if (isValidForm)
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', ...form })
      })
        .then(() => alert('Success!'))
        .catch(error => alert(error))
  }

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setForm(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <IndexLayout>
      <Page>
        <Container>
          <FormContainer>
            <FormSection>
              <form onSubmit={handleSubmit}>
                {isRecaptchaLoaded ? (
                  <div>
                    <p>
                      <label htmlFor="name">
                        Your Name: <input type="text" name="name" id="name" value={form.name} onChange={handleChange} />
                      </label>
                    </p>
                    <p>
                      <label htmlFor="email">
                        Your Email: <input type="email" name="email" id="email" value={form.email} onChange={handleChange} />
                      </label>
                    </p>
                    <p>
                      <label htmlFor="message">
                        Message: <textarea name="message" id="message" value={form.message} onChange={handleChange} />
                      </label>
                    </p>
                  </div>
                ) : (
                    <div />
                  )}
                <Recaptcha
                  sitekey="6Ldnxe8UAAAAADQ0QI_iZKmZidrPL7UYc085xXDf"
                  render="explicit"
                  verifyCallback={verifyCallback}
                  onloadCallback={recaptchaLoaded}
                />
                <p>
                  <button type="submit" disabled={!isValidForm}>
                    Send
                  </button>
                </p>
              </form>
            </FormSection>
            <SvgSection>
              <img src={AnimatedEnvelop} alt="Envelope" />
            </SvgSection>
          </FormContainer>
        </Container>
      </Page>
    </IndexLayout>
  )
}
