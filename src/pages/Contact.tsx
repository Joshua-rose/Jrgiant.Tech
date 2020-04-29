/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react'
import Recaptcha from 'react-recaptcha'
import styled from '@emotion/styled'
import AnimatedEnvelop from '../assets/Animated Envelop With Text.svg'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
import { colors } from '../styles/variables'

const FormContainer = styled.div`
  display: flex;
  min-height: 80vh;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;
  *.hidden {
    display: none;
  }
  .hidden-label-text {
    position: absolute;
    left: -10000px;
  }
  input,
  textarea,
  button {
    width: 90%;
    border-radius: 6px;
    padding: 0 1rem;
  }
  input,
  button {
    min-height: 3rem;
  }
  textarea {
    min-height: 10rem;
    padding-top: 1rem;
  }
  button {
    background-color: ${colors.brand};
    color: ${colors.white};
    text-align: center;
    font-weight: bold;
    font-size: 1.4rem;
  }
`
const FormSection = styled.div`
  flex: 3;
  min-width: 350px;
`

const SvgSection = styled.div`
  flex: 2;
  min-width: 200px;
`

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [showReCaptcha, setShowReCaptcha] = useState(false)
  const [isRecaptchaLoaded, setIsRecaptchaLoaded] = useState(false)
  const recaptchaLoaded = () => {
    setIsRecaptchaLoaded(true)
  }
  // const [isValidForm, setIsValidForm] = useState(false)

  const handleSubmit = (e: any) => {
    e.preventDefault()
    setShowReCaptcha(true)
  }
  const encode = (data: { 'form-name': string; name: string; email: string; message: string; 'g-recaptcha-response': string }) => {
    return Object.keys(data)
      .map((key: any) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
      .join('&')
  }
  const verifyCallback = (data: string) => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...form, 'g-recaptcha-response': data })
    })
      .then(() => alert('Success!'))
      .catch(error => alert(error))
    // console.log('verify Callback', data)
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
              <h1>Contact Us</h1>
              {!isRecaptchaLoaded && (
                <form
                  onSubmit={handleSubmit}
                  name="contact"
                  method="POST"
                  data-netlify-recaptcha="true"
                  netlify-honeypot="bot-field"
                  data-netlify="true"
                >
                  <p className="hidden">
                    <label htmlFor="bot-field">
                      Don’t fill this out if you're human: <input name="bot-field" id="bot-field" />
                    </label>
                  </p>
                  <div>
                    <p>
                      <label htmlFor="name">
                        <span className="hidden-label-text">Your Name: </span>
                        <input type="text" name="name" id="name" value={form.name} onChange={handleChange} placeholder="Name" />
                      </label>
                    </p>
                    <p>
                      <label htmlFor="email">
                        <span className="hidden-label-text">Your Email: </span>
                        <input type="email" name="email" id="email" value={form.email} onChange={handleChange} placeholder="Email" />
                      </label>
                    </p>
                    <p>
                      <label htmlFor="message">
                        <span className="hidden-label-text">Message: </span>
                        <textarea name="message" id="message" value={form.message} onChange={handleChange} placeholder="Message" />
                      </label>
                    </p>
                  </div>
                  <p>
                    <button type="submit">Send</button>
                  </p>
                </form>
              )}
              {showReCaptcha && (
                <Recaptcha
                  sitekey={process.env.GATSBY_SITE_RECAPTCHA_KEY}
                  render="explicit"
                  verifyCallback={verifyCallback}
                  onloadCallback={recaptchaLoaded}
                />
              )}
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
