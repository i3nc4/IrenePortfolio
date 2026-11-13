import { useEffect, useRef } from 'react'
import {
  Award,
  BadgeCheck,
  CalendarDays,
  ExternalLink,
  Maximize2,
  X,
} from 'lucide-react'
import './CertificateModal.css'

/**
 * Accessible lightbox for certificate previews.
 * Closes on Escape, backdrop click, or the close button.
 */
export default function CertificateModal({ certificate, onClose }) {
  const dialogRef = useRef(null)
  const closeRef = useRef(null)
  const previousFocus = useRef(null)

  useEffect(() => {
    if (!certificate) return undefined

    previousFocus.current = document.activeElement
    document.body.classList.add('modal-open')
    closeRef.current?.focus()

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose()
        return
      }

      if (event.key !== 'Tab') return

      // Simple focus trap inside the dialog.
      const focusable = dialogRef.current?.querySelectorAll(
        'a[href], button:not([disabled])',
      )
      if (!focusable || focusable.length === 0) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.classList.remove('modal-open')
      previousFocus.current?.focus?.()
    }
  }, [certificate, onClose])

  if (!certificate) return null

  return (
    <div
      className="cert-modal"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <div
        ref={dialogRef}
        className="cert-modal__dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cert-modal-title"
      >
        <button
          ref={closeRef}
          type="button"
          className="cert-modal__close icon-btn"
          onClick={onClose}
          aria-label="Close certificate preview"
        >
          <X size={18} aria-hidden="true" />
        </button>

        <div className="cert-modal__preview">
          <img src={certificate.image} alt={certificate.imageAlt} width="900" height="640" />
        </div>

        <div className="cert-modal__body">
          <p className="eyebrow">Certificate</p>
          <h2 id="cert-modal-title">{certificate.title}</h2>
          <p className="cert-modal__org">
            <Award size={15} aria-hidden="true" />
            {certificate.organization}
          </p>
          <p className="cert-modal__description">{certificate.description}</p>

          <dl className="cert-modal__meta">
            <div>
              <dt>
                <CalendarDays size={14} aria-hidden="true" />
                Issued
              </dt>
              <dd>{certificate.date}</dd>
            </div>
            <div>
              <dt>
                <BadgeCheck size={14} aria-hidden="true" />
                Credential ID
              </dt>
              <dd>{certificate.credentialId}</dd>
            </div>
          </dl>

          <div className="cert-modal__actions">
            {certificate.credentialUrl ? (
              <a
                className="btn btn--primary btn--sm"
                href={certificate.credentialUrl}
                target="_blank"
                rel="noreferrer noopener"
              >
                Verify credential
                <ExternalLink size={14} aria-hidden="true" />
              </a>
            ) : null}
            <a
              className="btn btn--secondary btn--sm"
              href={certificate.image}
              target="_blank"
              rel="noreferrer noopener"
            >
              <Maximize2 size={14} aria-hidden="true" />
              Open full image
            </a>
            <button type="button" className="btn btn--ghost btn--sm" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
