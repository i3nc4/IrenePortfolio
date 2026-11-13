import emailjs from '@emailjs/browser'

/**
 * EMAILJS SETUP
 * ---------------------------------------------------------------
 * 1. Copy .env.example to .env.local
 * 2. Add your EmailJS Service ID, Template ID and Public Key.
 * 3. Restart the dev server after changing environment variables.
 *
 * The template in your EmailJS dashboard should use these variables:
 *   {{from_name}}  {{from_email}}  {{reply_to}}  {{subject}}  {{message}}
 */

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

// Placeholder values from .env.example count as "not configured".
const looksLikePlaceholder = (value) =>
  !value || /^your[_-]/i.test(value) || /placeholder|xxxx/i.test(value)

export const isEmailConfigured = ![SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY].some(
  looksLikePlaceholder,
)

export async function sendContactEmail({ name, email, subject, message }) {
  if (!isEmailConfigured) {
    const error = new Error('EmailJS is not configured.')
    error.code = 'EMAIL_NOT_CONFIGURED'
    throw error
  }

  return emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID,
    {
      from_name: name,
      from_email: email,
      reply_to: email,
      subject,
      message,
    },
    { publicKey: PUBLIC_KEY },
  )
}
