import { useCallback, useState } from 'react'
import { Award, CalendarDays, Maximize2, ZoomIn } from 'lucide-react'
import CertificateModal from '../components/CertificateModal'
import Reveal from '../components/Reveal'
import SectionTitle from '../components/SectionTitle'
import { certificates } from '../data/certificates'
import './Certificates.css'

export default function Certificates() {
  const [selected, setSelected] = useState(null)
  const closeModal = useCallback(() => setSelected(null), [])
  const hasCertificates = certificates.length > 0

  return (
    <section
      id="certificates"
      className="section certificates"
      aria-labelledby="certificates-title"
    >
      <div className="container">
        <Reveal>
          <SectionTitle
            id="certificates-title"
            eyebrow="Proof of learning"
            title="Certificates & Achievements"
            description="Seminars, training programs, and academic achievements will be listed here as I continue learning."
          />
        </Reveal>

        {hasCertificates ? (
          <>
            <div className="certificates__grid">
              {certificates.map((certificate, index) => (
                <Reveal
                  as="article"
                  className="certificate-card"
                  key={certificate.id}
                  delay={index * 80}
                >
                  <button
                    type="button"
                    className="certificate-card__preview"
                    onClick={() => setSelected(certificate)}
                    aria-label={`View ${certificate.title} certificate`}
                    aria-haspopup="dialog"
                  >
                    <img
                      src={certificate.image}
                      alt={certificate.imageAlt}
                      width="900"
                      height="640"
                      loading="lazy"
                    />
                    <span className="certificate-card__overlay" aria-hidden="true">
                      <span className="certificate-card__zoom">
                        <Maximize2 size={18} />
                      </span>
                      <span>Click to enlarge</span>
                    </span>
                  </button>

                  <div className="certificate-card__body">
                    <div className="certificate-card__meta">
                      <span>
                        <Award size={13} aria-hidden="true" />
                        {certificate.organization}
                      </span>
                      <span>
                        <CalendarDays size={13} aria-hidden="true" />
                        {certificate.date}
                      </span>
                    </div>

                    <h3>{certificate.title}</h3>
                    <p className="certificate-card__description">{certificate.description}</p>

                    <div className="certificate-card__footer">
                      <span className="certificate-card__id">
                      </span>
                      <button
                        type="button"
                        className="btn btn--secondary btn--sm"
                        onClick={() => setSelected(certificate)}
                      >
                        View Certificate
                        <Maximize2 size={13} aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            
          </>
        ) : (
          <Reveal className="certificates__empty">
            <span className="certificates__empty-icon">
              <Award size={26} aria-hidden="true" />
            </span>
            <h3>Certificates coming soon</h3>
            <p>
              Certificates of participation, seminars, technical training, and academic achievements
              will be added here as I complete them.
            </p>
          </Reveal>
        )}
      </div>

      {selected ? (
        <CertificateModal certificate={selected} onClose={closeModal} />
      ) : null}
    </section>
  )
}
