import { ArrowUp, ArrowUpRight, Heart, Mail, MapPin } from 'lucide-react'
import { navLinks, site } from '../data/site'
import SocialLinks from './SocialLinks'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  const scrollToTop = () => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' })
  }

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-panel">
          <span className="footer-orb footer-orb--one" aria-hidden="true" />
          <span className="footer-orb footer-orb--two" aria-hidden="true" />

          <div className="footer-top">
            <div className="footer-brand">
              <a href="#home" className="footer-brand__logo" aria-label={`${site.name} — back to top`}>
                <span className="footer-mark" aria-hidden="true">
                  {site.initials}
                </span>
                <span>{site.name}</span>
              </a>
              <p className="footer-brand__text">
                Aspiring IT professional and fourth-year BSIT student at La Consolacion University
                Philippines. Learning today, building tomorrow.
              </p>
              <SocialLinks className="footer-socials" />
            </div>

            <nav className="footer-nav" aria-label="Footer navigation">
              <h3>Explore</h3>
              <ul>
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <a href={`#${link.id}`}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="footer-contact">
              <h3>Get in touch</h3>
              <a href={`mailto:${site.email}`}>
                <Mail size={15} aria-hidden="true" />
                {site.email}
              </a>
              <p>
                <MapPin size={15} aria-hidden="true" />
                {site.location}
              </p>
              <a className="footer-contact__cta" href="#contact">
                Send a message
                <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="footer-bottom">
            <p>
              © {year} {site.name}. All rights reserved.
            </p>
            
            <button type="button" className="footer-top-btn" onClick={scrollToTop}>
              Back to top
              <span aria-hidden="true">
                <ArrowUp size={14} />
              </span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
