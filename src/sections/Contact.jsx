import { useState } from 'react'
import {
  AlertCircle,
  CheckCircle2,
  Clock,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Send,
} from 'lucide-react'
import Reveal from '../components/Reveal'
import SectionTitle from '../components/SectionTitle'
import SocialLinks from '../components/SocialLinks'
import { site } from '../data/site'
import { sendContactEmail } from '../services/emailService'
import './Contact.css'

const initialValues = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

function validate(values) {
  const errors = {}

  if (values.name.trim().length < 2) {
    errors.name = 'Please enter your full name.'
  }

  if (!values.email.trim()) {
    errors.email = 'Please enter your email address.'
  } else if (!emailPattern.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address.'
  }

  if (values.subject.trim().length < 3) {
    errors.subject = 'Please add a short subject.'
  }

  if (values.message.trim().length < 10) {
    errors.message = 'Tell me a little more — at least 10 characters.'
  }

  return errors
}

export default function Contact() {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const [feedback, setFeedback] = useState('')

  const isSending = status === 'sending'

  const handleChange = (event) => {
    const { name, value } = event.target

    setValues((current) => ({ ...current, [name]: value }))

    if (errors[name]) {
      setErrors((current) => ({ ...current, [name]: undefined }))
    }

    if (status === 'success' || status === 'error') {
      setStatus('idle')
      setFeedback('')
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (isSending) return

    const nextErrors = validate(values)
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      const firstInvalid = Object.keys(nextErrors)[0]
      document.getElementById(`contact-${firstInvalid}`)?.focus()
      setStatus('idle')
      setFeedback('')
      return
    }

    setStatus('sending')
    setFeedback('')

    try {
      await sendContactEmail({
        name: values.name.trim(),
        email: values.email.trim(),
        subject: values.subject.trim(),
        message: values.message.trim(),
      })

      setStatus('success')
      setFeedback(
        "Thanks for reaching out! Your message has been sent — I'll get back to you as soon as I can.",
      )
      setValues(initialValues)
      setErrors({})
    } catch (error) {
      setStatus('error')
      setFeedback(
        error?.code === 'EMAIL_NOT_CONFIGURED'
          ? 'The contact form is not connected yet. Add your EmailJS credentials to .env.local, then restart the dev server. See README.md for setup steps.'
          : 'Something went wrong while sending your message. Please try again, or email me directly using the address on the left.',
      )
    }
  }

  return (
    <section id="contact" className="section section--tint contact" aria-labelledby="contact-title">
      <div className="container">
        <Reveal>
          <SectionTitle
            id="contact-title"
            eyebrow="Get in touch"
            title="Let's Connect"
            description="I am open to internship opportunities, professional connections, and experiences that will help me grow in the field of Information Technology."
            align="center"
          />
        </Reveal>

        <div className="contact__grid">
          <Reveal className="contact__info-card" delay={60}>
            <span className="contact__orb" aria-hidden="true" />

            

            <h3>Open to opportunities</h3>
            <p className="contact__info-text">
              I would be happy to connect and explore opportunities where I can learn, contribute,
              and develop my professional skills.
            </p>

            <ul className="contact__details">
              <li>
                <span className="contact__detail-icon">
                  <Mail size={17} aria-hidden="true" />
                </span>
                <span>
                  <small>Email</small>
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </span>
              </li>
              <li>
                <span className="contact__detail-icon">
                  <Phone size={17} aria-hidden="true" />
                </span>
                <span>
                  <small>Phone</small>
                  <a href={`tel:${site.phone.replace(/\s+/g, '')}`}>{site.phone}</a>
                </span>
              </li>
              <li>
                <span className="contact__detail-icon">
                  <MapPin size={17} aria-hidden="true" />
                </span>
                <span>
                  <small>Location</small>
                  <strong>{site.location}</strong>
                </span>
              </li>
            </ul>

            <div className="contact__divider" />

            <div className="contact__socials">
              <small>Find me online</small>
              <SocialLinks size="lg" className="contact__social-list" />
            </div>

            <p className="contact__response">
              <Clock size={14} aria-hidden="true" />
              Typical response time: 24–48 hours
            </p>
          </Reveal>

          <Reveal className="contact__form-card" delay={110}>
            <div className="contact-form__head">
              <h3>Send me a message</h3>
              <p>Fill in the form below and I&apos;ll get back to you soon.</p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="contact-form__row">
                <div className="form-field">
                  <label htmlFor="contact-name">
                    Full name <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Jane Dela Cruz"
                    value={values.name}
                    onChange={handleChange}
                    aria-required="true"
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? 'contact-name-error' : undefined}
                    maxLength={80}
                  />
                  {errors.name ? (
                    <p className="form-error" id="contact-name-error">
                      <AlertCircle size={13} aria-hidden="true" />
                      {errors.name}
                    </p>
                  ) : null}
                </div>

                <div className="form-field">
                  <label htmlFor="contact-email">
                    Email address <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="jane@example.com"
                    value={values.email}
                    onChange={handleChange}
                    aria-required="true"
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? 'contact-email-error' : undefined}
                    maxLength={120}
                  />
                  {errors.email ? (
                    <p className="form-error" id="contact-email-error">
                      <AlertCircle size={13} aria-hidden="true" />
                      {errors.email}
                    </p>
                  ) : null}
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="contact-subject">
                  Subject <span aria-hidden="true">*</span>
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  autoComplete="off"
                  placeholder="Internship opportunity, project idea, hello…"
                  value={values.subject}
                  onChange={handleChange}
                  aria-required="true"
                  aria-invalid={Boolean(errors.subject)}
                  aria-describedby={errors.subject ? 'contact-subject-error' : undefined}
                  maxLength={120}
                />
                {errors.subject ? (
                  <p className="form-error" id="contact-subject-error">
                    <AlertCircle size={13} aria-hidden="true" />
                    {errors.subject}
                  </p>
                ) : null}
              </div>

              <div className="form-field">
                <div className="form-field__label-row">
                  <label htmlFor="contact-message">
                    Message <span aria-hidden="true">*</span>
                  </label>
                  <span className="form-field__count">{values.message.length}/1000</span>
                </div>
                <textarea
                  id="contact-message"
                  name="message"
                  rows="6"
                  placeholder="Tell me a little about yourself and what you have in mind…"
                  value={values.message}
                  onChange={handleChange}
                  aria-required="true"
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? 'contact-message-error' : undefined}
                  maxLength={1000}
                />
                {errors.message ? (
                  <p className="form-error" id="contact-message-error">
                    <AlertCircle size={13} aria-hidden="true" />
                    {errors.message}
                  </p>
                ) : null}
              </div>

              {status === 'success' ? (
                <p className="form-feedback form-feedback--success" role="status">
                  <CheckCircle2 size={17} aria-hidden="true" />
                  {feedback}
                </p>
              ) : null}

              {status === 'error' ? (
                <p className="form-feedback form-feedback--error" role="alert">
                  <AlertCircle size={17} aria-hidden="true" />
                  {feedback}
                </p>
              ) : null}

              <button
                type="submit"
                className="btn btn--primary btn--full"
                disabled={isSending}
              >
                {isSending ? (
                  <>
                    <Loader2 size={17} className="spin" aria-hidden="true" />
                    Sending…
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={16} aria-hidden="true" />
                  </>
                )}
              </button>

              <p className="contact-form__privacy">
                Your details are only used to reply to your message. No spam, ever.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
