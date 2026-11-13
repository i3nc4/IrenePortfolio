import { ArrowDown, ArrowUpRight, Mail } from 'lucide-react'
import profileImage from '../assets/images/MyPhoto.png'
import { site } from '../data/site'
import SocialLinks from '../components/SocialLinks'
import './Hero.css'

export default function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="hero__bg" aria-hidden="true">
        <span className="hero__wash" />
        <span className="hero__rings" />
        <span className="hero__dots" />
        <span className="hero__grain" />
      </div>

      <div className="container hero__inner">
        <div className="hero__content">
          <p className="hero__greeting">Hello, I&apos;m</p>

          <h1 id="hero-title" className="hero__title">
            <span className="gradient-text">{site.name}</span>
            <span className="hero__title-dot" aria-hidden="true">
              .
            </span>
          </h1>

          <p className="hero__role">
            <span className="hero__role-mark" aria-hidden="true" />
            {site.role}
          </p>

          <p className="hero__intro">{site.intro}</p>

          <div className="hero__actions">
            <a href="#projects" className="btn btn--primary">
              View My Projects
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
            <a href="#contact" className="btn btn--secondary">
              Contact Me
              <Mail size={16} aria-hidden="true" />
            </a>
          </div>

          

          
        </div>

        <div className="hero__visual">
          <div className="hero__visual-inner">
            <span className="hero__halo" aria-hidden="true" />
            <span className="hero__ring" aria-hidden="true" />

            <div className="hero__portrait-card">
              <img
                src={profileImage}
                alt={site.profileAlt}
                width="600"
                height="680"
                fetchPriority="high"
              />
            </div>

            <span className="hero__spark hero__spark--one" aria-hidden="true" />
            <span className="hero__spark hero__spark--two" aria-hidden="true" />
          </div>
        </div>
      </div>

      <a href="#about" className="hero__scroll" aria-label="Scroll to the About section">
        <span className="hero__mouse" aria-hidden="true">
          <span />
        </span>
        <span>Scroll to explore</span>
        <ArrowDown size={13} aria-hidden="true" />
      </a>
    </section>
  )
}
